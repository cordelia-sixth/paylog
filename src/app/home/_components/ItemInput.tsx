import { useState } from "react";
import { Item } from "../page";

/**
 * 購入物と金額を入力するコンポーネント
 */
export const ItemInput = () => {
  const [item, setItem] = useState({ name: "", price: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    const key = e.currentTarget.name;

    setItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <form action="" className="grid grid-cols-4 grid-rows-1 gap-2 p-2">
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
