import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="jusc flex items-start justify-between py-5">
      <p>&copy; PayLog</p>
      <Link href="https://cordelia.dev" className="flex gap-1">
        Created by
        <Image
          src="/myicon.png"
          alt="Creator's icon"
          width={25}
          height={25}
        ></Image>
        cordelia
      </Link>
    </footer>
  );
};
