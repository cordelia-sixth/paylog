"use client";

import { useRouter } from "next/navigation";
import { IoLogInOutline } from "react-icons/io5";
import { MouseEvent } from "react";

export const Login = () => {
  const router = useRouter();

  const login = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/login");
  };

  return (
    <button onClick={login} className="flex items-center gap-1">
      Login
      <IoLogInOutline size={25} />
    </button>
  );
};
