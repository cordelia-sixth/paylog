import { deleteDoc, doc } from "firebase/firestore";
import { Item } from "../../page";
import { firebaseStore } from "@/lib/firebase";
import { formatPrice } from "../utils";

/**
 * アイテム情報を受け取って表示するコンポーネント
 */
export const ItemCard = ({ id, name, price }: Item) => {
  // TODO: パラメータ型修正
  const handleClick = async (id: string) => {
    await deleteDoc(doc(firebaseStore, "items", id));
  };

  return (
    <ul className="row-start-2">
      <li>
        <div className="grid grid-cols-4 grid-rows-1 gap-2 p-2">
          <span className="col-span-2 border">{name}</span>
          <span className="col-start-3 border">
            {formatPrice(Number(price))}
          </span>
          <button
            className="col-start-4 border"
            onClick={() => handleClick(id)}
          >
            削除
          </button>
        </div>
      </li>
    </ul>
  );
};
