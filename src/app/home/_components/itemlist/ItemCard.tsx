import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Item } from "../../page";
import { formatPrice, formatTime } from "../utils";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { firebaseStore } from "@/lib/firebase/client";
import { FormEvent, memo, useRef, useState } from "react";
import { useDialog } from "../modal/dialog";

/**
 * アイテム情報を受け取って表示するコンポーネント
 */
export const ItemCard = memo(({ id, name, price, createdAt, userId }: Item) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [item, setItem] = useState({ name, price });
  const { handleOpen, handleClose, Dialog } = useDialog();

  // TODO: パラメータ型修正
  const handleClick = async (id: string) => {
    divRef.current?.classList.remove("animate-appear");
    divRef.current?.classList.add("animate-disappear");
    await new Promise((resolve) => setTimeout(resolve, 700));
    await deleteDoc(doc(firebaseStore, `users/${userId}/items/`, id));
  };

  // 編集ダイアログ
  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateDoc(doc(firebaseStore, `users/${userId}/items/`, id), {
      ...item,
    });
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const key = e.currentTarget.name;
    const value = e.currentTarget.value.trim();
    setItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div
      className="flex w-full animate-appear justify-between gap-3 rounded-xl bg-slate-100 p-2 shadow-xl"
      ref={divRef}
    >
      <Dialog>
        <div className="flex flex-col p-5">
          <button type="button" className="self-end p-2" onClick={handleClose}>
            <TiDelete size={25} />
          </button>
          <form
            className="flex flex-col justify-center gap-8"
            onSubmit={handleUpdate}
          >
            <label className="flex flex-col gap-2">
              買い物
              <input
                type="text"
                value={item.name}
                placeholder={name}
                name="name"
                maxLength={20}
                required
                onChange={handleChange}
                className="rounded-md bg-slate-100 p-3 shadow-xl focus:outline-none focus:ring-4 focus:ring-red-600"
              />
            </label>
            <label className="flex flex-col">
              金額
              <input
                type="text"
                value={item.price}
                placeholder={price}
                name="price"
                min={1}
                max={99999999}
                required
                onChange={handleChange}
                className="rounded-md bg-slate-100 p-3 shadow-xl focus:outline-none focus:ring-4 focus:ring-red-600"
              />
            </label>

            <button
              type="submit"
              className="self-end rounded-md bg-rose-300 p-2 px-4 shadow-xl hover:opacity-80 active:scale-95"
            >
              保存
            </button>
          </form>
        </div>
      </Dialog>

      <div className="flex w-full items-center justify-between overflow-y-hidden">
        <div className="flex max-w-[60%] flex-col overflow-y-auto whitespace-nowrap p-2">
          <small className="text-slate-500">{formatTime(createdAt)}</small>
          <p>{name}</p>
        </div>
        <p className="max-w-[40%] overflow-y-auto whitespace-nowrap border-r-2 pr-6">
          {formatPrice(Number(price))}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleOpen()}
          className="p-2 hover:opacity-70 active:scale-90"
        >
          <MdEdit size={25} color="#4f535c" />
        </button>
        <button
          className="p-2 hover:opacity-70 active:scale-90"
          onClick={() => handleClick(id)}
        >
          <MdDelete size={25} color="#4f535c" />
        </button>
      </div>
    </div>
  );
});

ItemCard.displayName = "ItemCard";
