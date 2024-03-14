"use client";

import { firebaseAuth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../provider/AuthProvider";

/**
 * ログイン・ログアウトボタンを表示するコンポーネント
 * @returns button
 */
export const LoginLogout = () => {
  const router = useRouter();
  const loginUser = useAuthContext();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(firebaseAuth, provider);
      router.push("/home");
    } catch (error) {
      console.log(error);
      // TODO: エラーメッセージをトーストで表示
      router.push("/");
    }
  };

  const logout = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      console.log(error);
      // TODO: エラーメッセージをトーストで表示
    } finally {
      router.push("/");
    }
  };

  console.log(loginUser);

  return (
    <>
      {!loginUser ? (
        <button onClick={login} className="border px-4 py-2">
          Login
        </button>
      ) : (
        <button onClick={logout} className="border px-4 py-2">
          Logout
        </button>
      )}
    </>
  );
};
