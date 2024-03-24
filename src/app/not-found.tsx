"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "./_layout/provider/AuthProvider";

const NotFount = () => {
  const router = useRouter();
  const loginUser = useAuthContext();

  if (loginUser) {
    router.push("/home");
  } else {
    router.push("/");
  }

  return (
    <div>
      <p>お探しのページは見つかりませんでした。</p>
      <p>URLが間違っているか、削除された可能性があります。</p>
      <p>ページを移動します。</p>
    </div>
  );
};

export default NotFount;
