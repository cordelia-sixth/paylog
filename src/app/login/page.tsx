"use client";

import { firebaseAuth } from "@/lib/firebase/client";
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../_layout/provider/AuthProvider";
import { MouseEvent } from "react";

/**
 * ログインページ
 */
const Page = () => {
  const router = useRouter();
  const loginUser = useAuthContext();

  if (loginUser) {
    router.push("/home");
  }

  const onClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const provider = new GoogleAuthProvider();

    try {
      // await signInWithPopup(firebaseAuth, provider);
      // const result = await signInWithPopup(firebaseAuth, provider);
      await signInWithRedirect(firebaseAuth, provider);
      const result = await getRedirectResult(firebaseAuth);
      if (result) {
        // This is the signed-in user
        router.push("/home");
      }
    } catch (error) {
      // console.log(error);
      alert(error);
      router.push("/");
    }
  };

  if (loginUser) {
    return null;
  } else {
    return (
      <div className="flex flex-col items-center gap-5 self-center rounded-sm bg-blue-600 p-4 shadow-xl">
        <button
          className="flex items-center gap-5 rounded-sm bg-white p-4  text-center text-xl font-medium tracking-wide text-black"
          onClick={onClick}
        >
          <FcGoogle size={25} />
          Googleでログイン
        </button>
      </div>
    );
  }
};

export default Page;
