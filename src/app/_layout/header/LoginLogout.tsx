"use client";

import { firebaseAuth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../provider/AuthProvider";
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

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

  return (
    <>
      {!loginUser ? (
        <button onClick={login} className="flex items-center gap-1">
          Login
          <IoLogInOutline size={25} />
        </button>
      ) : (
        <button onClick={logout} className="flex items-center gap-1">
          Logout
          <IoLogOutOutline size={25} />
        </button>
      )}
    </>
  );
};
