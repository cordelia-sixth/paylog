import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-t-slate-200 p-4">
      <div className="mx-auto flex w-full justify-between sm:w-[640px]">
        <p>&copy; PayLog</p>
        <Link href="https://cordelia.dev">Created by cordelia</Link>
      </div>
    </footer>
  );
};
