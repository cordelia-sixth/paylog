import { firebaseAuth } from "@/lib/firebase/client";
import { signOut } from "firebase/auth";
import { MouseEvent } from "react";
import { IoLogOutOutline } from "react-icons/io5";

export const Logout = () => {
  const logout = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await signOut(firebaseAuth).catch((error) => {
      console.log(error);
    });
  };

  return (
    <button onClick={logout} className="flex items-center gap-1">
      Logout
      <IoLogOutOutline size={25} />
    </button>
  );
};
