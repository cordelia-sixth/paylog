"use client";

import { firebaseAuth } from "@/lib/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type AuthUser = User | null | undefined;

const AuthContext = createContext<AuthUser>(null);

/**
 * ログインユーザーのコンテキスト
 */
export const AuthProvider = ({ children }: Props) => {
  const [loginUser, setLogiuUser] = useState<AuthUser>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) {
        setLogiuUser(null);
      }
      setLogiuUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={loginUser}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
