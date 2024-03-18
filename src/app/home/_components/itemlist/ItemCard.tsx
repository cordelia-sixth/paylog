import { deleteDoc, doc } from "firebase/firestore";
import { Item } from "../../page";

import { formatPrice } from "../utils";
import { MdDeleteOutline } from "react-icons/md";
import { firebaseStore } from "@/lib/firebase/client";

/**
 * アイテム情報を受け取って表示するコンポーネント
 */
export const ItemCard = ({ id, name, price }: Item) => {
  // TODO: パラメータ型修正
  const handleClick = async (id: string) => {
    await deleteDoc(doc(firebaseStore, "items", id));
  };

  return (
    <div className="flex w-full justify-between rounded-xl bg-slate-100 p-2">
      <div className="flex w-full items-center justify-between gap-4 overflow-y-hidden">
        <p className="max-w-[60%] overflow-y-auto whitespace-nowrap p-2">
          {name}
        </p>
        <p className="max-w-[40%] overflow-y-auto whitespace-nowrap border-r-2 pr-6">
          {formatPrice(Number(price))}
        </p>
      </div>
      <button className=" cursor-pointer px-4" onClick={() => handleClick(id)}>
        <MdDeleteOutline size={25} color="#7b818f" />
      </button>
    </div>
  );
};
