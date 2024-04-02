"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { firebaseAuth } from "@/lib/firebase/client";
import { useAuthContext } from "../provider/AuthProvider";
import { MouseEvent } from "react";

/**
 * ログイン・ログアウトボタンを表示するコンポーネント
 */
export const LoginLogout = () => {
  const router = useRouter();
  const loginUser = useAuthContext();

  const login = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/login");
  };

  const logout = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await signOut(firebaseAuth).catch((error) => {
      console.log(error);
    });
  };

  console.log(loginUser);

  // if (loginUser === undefined) {
  //   return null;
  // }

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
