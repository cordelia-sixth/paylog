"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { firebaseAuth } from "@/lib/firebase/client";
import { useAuthContext } from "../provider/AuthProvider";

/**
 * ログイン・ログアウトボタンを表示するコンポーネント
 * @returns button
 */
export const LoginLogout = () => {
  const router = useRouter();
  const loginUser = useAuthContext();

  const login = () => {
    router.push("/login");
  };

  const logout = async () => {
    try {
      await signOut(firebaseAuth);
      router.push("/");
    } catch (error) {
      console.log(error);
      // TODO: エラーメッセージをトーストで表示
    } finally {
      router.push("/");
    }
  };

  if (loginUser === undefined) return null;

  if (loginUser === null) {
    return (
      <button onClick={login} className="flex items-center gap-1">
        Login
        <IoLogInOutline size={25} />
      </button>
    );
  } else {
    return (
      <button onClick={logout} className="flex items-center gap-1">
        Logout
        <IoLogOutOutline size={25} />
      </button>
    );
  }
};
