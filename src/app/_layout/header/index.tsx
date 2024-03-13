import Link from "next/link";
import { LoginLogout } from "./LoginLogout";

export const Header = () => {
  return (
    <header className="border-b border-b-slate-200 p-4">
      <div className="mx-auto flex w-full justify-between sm:w-[640px]">
        <Link href="/">PayLog</Link>
        <LoginLogout />
      </div>
    </header>
  );
};
