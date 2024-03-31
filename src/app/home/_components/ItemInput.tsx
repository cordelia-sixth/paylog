import { FormEvent, useRef, useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { firebaseStore } from "@/lib/firebase/client";
import { IoIosAdd } from "react-icons/io";
import { useAuthContext } from "@/app/_layout/provider/AuthProvider";

/**
 * 購入物と金額を入力するコンポーネント
 */
export const ItemInput = () => {
  const loginUser = useAuthContext();
  const initState = { name: "", price: "" };
  const [inputItem, setInputItem] = useState(initState);
  const focusElm = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const key = e.currentTarget.name;
    const value = e.currentTarget.value.trim();
    setInputItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // TODO: zod, useFormState, useFormStatusを使う
    if (inputItem.name !== "" && inputItem.price !== "") {
      await addDoc(collection(firebaseStore, `users/${loginUser?.id}/items/`), {
        ...inputItem,
        createdAt: Date.now(),
        userId: loginUser?.id,
      });
    }
    setInputItem(initState);
    focusElm.current?.focus();
  };

  return (
    <form
      className="grid grid-cols-8 grid-rows-1 items-center gap-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        value={inputItem.name}
        placeholder="買い物"
        className="col-span-4 h-[88%] rounded-md bg-slate-100 p-3 shadow-custom focus:outline-none focus:ring-4 focus:ring-red-600"
        onChange={handleChange}
        ref={focusElm}
        maxLength={15}
        required
      />
      <input
        type="number"
        name="price"
        value={inputItem.price}
        placeholder="金額"
        className="col-span-3 h-[88%] rounded-md bg-slate-100 p-3 shadow-custom focus:outline-none focus:ring-4 focus:ring-red-600"
        onChange={handleChange}
        max={1000000}
        required
      />
      <button
        type="submit"
        className="col-span-1 w-full rounded-[50%] bg-white text-center shadow-custom active:opacity-70 sm:w-4/5"
      >
        <IoIosAdd color="#000000" className="size-full" />
      </button>
    </form>
  );
};
