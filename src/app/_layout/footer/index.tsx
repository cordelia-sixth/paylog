import Image from "next/image";
import Link from "next/link";
import { FaCoins } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="flex items-start justify-between py-5">
      <p className="flex items-center gap-1">
        Pay
        <FaCoins />
        Log
      </p>
      <Link
        href="https://cordelia.dev"
        rel="noopener noreferrer"
        target="_blank"
        className="flex items-center gap-1"
      >
        Created by
        <Image
          src="/myicon.png"
          alt="Creator's icon"
          width={25}
          height={25}
          className="size-6"
        ></Image>
        cordelia
      </Link>
    </footer>
  );
};
