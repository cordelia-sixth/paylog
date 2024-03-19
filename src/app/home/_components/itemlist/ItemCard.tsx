import { deleteDoc, doc } from "firebase/firestore";
import { Item } from "../../page";
import { formatPrice, formatTime } from "../utils";
import { MdDeleteOutline } from "react-icons/md";
import { firebaseStore } from "@/lib/firebase/client";
import { MutableRefObject, useRef } from "react";

/**
 * アイテム情報を受け取って表示するコンポーネント
 */
export const ItemCard = ({ id, name, price, createdAt }: Item) => {
  const divRef = useRef<HTMLDivElement>(null);
  // TODO: パラメータ型修正
  const handleClick = async (id: string) => {
    divRef.current?.classList.remove("animate-appear");
    divRef.current?.classList.add("animate-disappear");
    await new Promise((resolve) => setTimeout(resolve, 900));
    await deleteDoc(doc(firebaseStore, "items", id));
  };

  return (
    <div
      className="animate-appear flex w-full justify-between rounded-xl bg-slate-100 p-2"
      style={{ opacity: "1" }}
      ref={divRef}
    >
      <div className="flex w-full items-center justify-between gap-4 overflow-y-hidden">
        <p className="max-w-[60%] overflow-y-auto whitespace-nowrap p-2">
          {`${name} `}
          <small>{formatTime(createdAt)}</small>
        </p>
        <p className="max-w-[40%] overflow-y-auto whitespace-nowrap border-r-2 pr-6">
          {formatPrice(Number(price))}
        </p>
      </div>
      <button className=" cursor-pointer px-4" onClick={(e) => handleClick(id)}>
        <MdDeleteOutline size={25} color="#7b818f" />
      </button>
    </div>
  );
};
