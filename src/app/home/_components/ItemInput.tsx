import { FormEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firebaseStore } from "@/lib/firebase";
// import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";

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
      className="grid grid-cols-8 grid-rows-1 items-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        value={item.name}
        placeholder="買い物"
        className="col-span-4 h-[46px] rounded-md bg-slate-100 px-2"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={item.price}
        placeholder="1000"
        className="col-span-3 h-[46px] rounded-md bg-slate-100 px-2"
        onChange={handleChange}
      />
      <button type="submit" className="col-span-1 -ml-[3px]">
        {/* <IoIosAddCircleOutline size={56} color="#ffffff" /> */}
        {/* <FaCirclePlus size={47} color="#ffffff" /> */}
        <FaPlusSquare size={40} color="#ffffff" />
      </button>
    </form>
  );
};
