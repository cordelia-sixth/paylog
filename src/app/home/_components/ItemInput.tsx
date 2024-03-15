import { FormEvent, FormEventHandler, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firebaseStore } from "@/lib/firebase";

/**
 * 購入物と金額を入力するコンポーネント
 */
export const ItemInput = () => {
  // TODO: ここ型付できない？
  const initState = { name: "", price: "" };
  const [item, setItem] = useState(initState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const value = e.currentTarget.value.trim();
    const key = e.currentTarget.name;

    setItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (item.name !== "" && item.price !== "") {
      await addDoc(collection(firebaseStore, "items"), {
        ...item,
      });
      setItem(initState);
    }
  };

  return (
    <form
      action=""
      className="grid grid-cols-4 grid-rows-1 gap-2 p-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        value={item.name}
        placeholder="買ったもの"
        className="col-span-2 border"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={item.price}
        placeholder="金額"
        className="col-start-3 border"
        onChange={handleChange}
      />
      <button type="submit" className="col-start-4 border">
        登録
      </button>
    </form>
  );
};
