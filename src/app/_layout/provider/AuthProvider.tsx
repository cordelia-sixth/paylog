"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LoginUser } from "./type";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, firebaseStore } from "@/lib/firebase/client";
import { doc, getDoc, setDoc } from "firebase/firestore";

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

  // レンダリング時に1回だけ起動する
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      async (currentUser) => {
        if (!currentUser) {
          setLoginUser(null);
        } else {
          // 登録済みユーザーか確認
          const ref = doc(firebaseStore, `users/${currentUser.uid}`);
          const snap = await getDoc(ref);

          if (!snap.exists()) {
            const user = {
              id: currentUser.uid,
              name: currentUser.displayName!,
              photoUrl: currentUser.photoURL!,
              email: currentUser.email!,
              createdAt: Date.now(),
            };
            await setDoc(ref, user);
            setLoginUser(user);
          } else {
            // ユーザーをセット
            const user = snap.data() as LoginUser;
            setLoginUser(user);
          }
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
