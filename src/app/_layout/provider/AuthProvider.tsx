"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, firebaseStore } from "@/lib/firebase/client";
import { LoginUser } from "@/app/_layout/provider/type";

/** contextの型 */
export type AuthContextType =
  /** 現在のログインユーザー */
  | LoginUser
  /** ユーザーなし */
  | null
  /** 初期値及び、取得中 */
  | undefined;

// contextを作成
const AuthContext = createContext<AuthContextType>(undefined);

/**
 * ログインユーザーを提供するcontext
 * @param children 子コンポーネント
 * @returns Context provider
 */
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loginUser, setLoginUser] = useState<AuthContextType>(undefined);

  // マウント時に1回だけ起動させる
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      async (currentUser) => {
        console.log(currentUser);

        if (!currentUser) {
          setLoginUser(null);
        } else {
          const user = {
            id: currentUser.uid,
            name: currentUser.displayName!,
            photoUrl: currentUser.photoURL!,
            email: currentUser.email!,
            createdAt: Date.now(),
          };
          setLoginUser(user);
        }
      },
    );

    // アンマウント時に停止する
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={loginUser}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
