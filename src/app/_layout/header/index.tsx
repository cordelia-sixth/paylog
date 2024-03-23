"use client";

import { LoginLogout } from "./LoginLogout";
import { FaCoins } from "react-icons/fa6";
import { useAuthContext } from "../provider/AuthProvider";

export const Header = () => {
  const user = useAuthContext();

  return (
    <header className="flex items-center justify-between py-5">
      <div className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1 text-white">
        Pay
        <FaCoins size={18} />
        Log
      </div>
      {!user ? null : user.name}
      <LoginLogout />
    </header>
  );
};
