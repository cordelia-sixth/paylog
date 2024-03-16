import Link from "next/link";
import { LoginLogout } from "./LoginLogout";
import { PiCoinVertical } from "react-icons/pi";
import { FaCoins } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-5">
      <Link
        href="/"
        className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1 text-white"
      >
        Pay
        <FaCoins />
        Log
      </Link>
      <LoginLogout />
    </header>
  );
};
