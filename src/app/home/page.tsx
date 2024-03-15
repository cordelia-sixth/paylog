"use client";

import { firebaseStore } from "@/lib/firebase";
import {
  DocumentData,
  DocumentSnapshot,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { ItemInput } from "./_components/ItemInput";
import { ItemList } from "./_components/itemlist";

export type Item = {
  /** アイテムID */
  id: string;
  /** アイテム名 */
  name: string;
  /** 金額 */
  price: string;
};

const Page = () => {
  const [inputItem, setInputItem] = useState();
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    const q = query(collection(firebaseStore, "items"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        let items: Item[] = [];
        snapshot.forEach((doc) => {
          const { name, price } = doc.data();
          items.push({ id: doc.id, name, price });
        });
        setItemList(items);
      },
      (error) => {
        // TODO: エラーメッセージをユーザーに表示する。
        console.log("onSnapshot error", error);
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <ItemInput />
      <ItemList itemList={itemList} />
      {/* Input */}
      {/* Input */}
    </>
    // <div className="h-svh">
    //   <div className="m-auto grid grid-cols-1 grid-rows-3 items-center justify-center gap-2 border p-4">
    //     {/* 入力 */}
    //     <form action="" className="grid grid-cols-4 grid-rows-1 gap-2 p-2">
    //       <input
    //         type="text"
    //         placeholder="買ったもの"
    //         className="col-span-2 border"
    //       />
    //       <input
    //         type="number"
    //         placeholder="金額"
    //         className="col-start-3 border"
    //       />
    //       <button type="submit" className="col-start-4 border">
    //         登録
    //       </button>
    //     </form>

    //     {/* item表示 */}
    //     <ul className="row-start-2">
    //       <li>
    //         <div className="grid grid-cols-4 grid-rows-1 gap-2 p-2">
    //           <span className="col-span-2 border">uber</span>
    //           <span className="col-start-3 border">¥100</span>
    //           <button className="col-start-4 border">削除</button>
    //         </div>
    //       </li>
    //     </ul>

    //     {/* total */}
    //     <div className="row-start-3 flex justify-between">
    //       <span>Total</span>
    //       <span>¥100</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Page;
