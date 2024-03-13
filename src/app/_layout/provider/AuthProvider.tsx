"use client";

import { firebaseAuth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<User | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

/**
 * ログインユーザーのコンテキスト
 * @param param0
 */
export const AuthProvider = ({ children }: Props) => {
  const [sessionUser, setSessionUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    // google認証情報が変更されてないかリッスンする
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) {
        return;
      }
      setSessionUser(currentUser);
      return () => unsubscribe();
    });
  }, [sessionUser]);

  // google認証ポップアップ
  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider);
  };

  return (
    <AuthContext.Provider value={sessionUser}>{children}</AuthContext.Provider>
  );
};

export const useSessionUser = () => useContext(AuthContext);
