"use client";

import { firebaseAuth, firebaseStore } from "@/lib/firebase/client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../_layout/provider/AuthProvider";
import { MouseEvent } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

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

    // TODO: エラーの時ユーザーにメッセージを表示する
    await signInWithPopup(firebaseAuth, provider)
      .then(async (result) => {
        // 登録済みのユーザーか確認
        const ref = doc(firebaseStore, `users/${result.user.uid}`);
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          const user = {
            id: result.user.uid,
            name: result.user.displayName!,
            photoUrl: result.user.photoURL!,
            email: result.user.email!,
            createdAt: Date.now(),
          };
          await setDoc(ref, user);
        }

        router.push("/home");
      })
      .catch((error) => {
        console.log(`ログインに失敗しました。${error.code}:${error.message}`);
      });
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
