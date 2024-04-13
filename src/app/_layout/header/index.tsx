"use client";

import { FaCoins } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";
import { useAuthContext } from "@/app/_layout/provider/AuthProvider";
import { Login } from "@/app/_layout/header/Login";
import { Logout } from "@/app/_layout/header/Logout";

/**
 * TODO: 表示が遅い時があるので要調査
 */

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
  const user = useAuthContext();

  return (
    <header className="flex items-center justify-between py-5">
      {user === undefined ? null : user === null ? (
        <>
          <Link
            href="/"
            className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1 text-white"
          >
            Pay
            <FaCoins size={18} />
            Log
          </Link>
          <Login />
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <Image
              src={user.photoUrl}
              width={30}
              height={30}
              alt="user's avator"
              className="rounded-full"
            />
            {user.name}
          </div>
          <Logout />
        </>
      )}
    </header>
  );
};
