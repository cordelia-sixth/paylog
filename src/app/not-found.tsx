import Link from "next/link";

/**
 * 404
 */
const NotFound = () => {
  return (
    <div className="flex flex-col gap-3">
      <p>
        お探しのページは見つかりませんでした。
        <br />
        URLが間違っているか、削除された可能性があります。
      </p>
      <Link
        href="/home"
        className="w-fit rounded-md border border-blue-500 p-2 hover:opacity-70"
      >
        ページを移動する
      </Link>
    </div>
  );
};

export default NotFound;
