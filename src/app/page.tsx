"use client";

import { useAuthContext } from "@/app/_layout/provider/AuthProvider";
import { useRouter } from "next/navigation";

import { FaCircleInfo } from "react-icons/fa6";

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
      <p>日々の支出を記録するシンプルなアプリです。</p>
      <p className="flex gap-2 rounded-md bg-yellow-100 p-4">
        <FaCircleInfo size={25} />
        このアプリはデモ版です。作成したアカウントとデータは一定期間を過ぎると削除されますのでご注意ください。
      </p>
    </>
  );
}
