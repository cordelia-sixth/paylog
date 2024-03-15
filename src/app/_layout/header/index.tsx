import Link from "next/link";
import { LoginLogout } from "./LoginLogout";

export const Header = () => {
  return (
    <header className="flex items-start justify-between py-5">
      <Link href="/">PayLog</Link>
      <LoginLogout />
    </header>
  );
};
