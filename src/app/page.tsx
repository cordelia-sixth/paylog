"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "./_layout/provider/AuthProvider";

/**
 * ログイン前トップページ
 */
export default function Home() {
  const router = useRouter();
  const loginUser = useAuthContext();

  if (loginUser) {
    router.push("/home");
  }

  return (
    <>
      <h1 className="text-8xl font-bold">Paylog</h1>
      <p>This is a simple app for recording your daily expenses.</p>
    </>
  );
}
