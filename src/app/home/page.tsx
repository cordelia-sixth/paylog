"use client";

import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ItemInput } from "./_components/ItemInput";
import { ItemList } from "./_components/itemlist";
import { Total } from "./_components/Total";
import { StyleComponent } from "../_layout/StyleComponent";
import { firebaseStore } from "@/lib/firebase/client";
import { useAuthContext } from "../_layout/provider/AuthProvider";
import { useRouter } from "next/navigation";

export type Item = {
  /** アイテムID */
  id: string;
  /** アイテム名 */
  name: string;
  /** 金額 */
  price: string;
};

const Page = () => {
  const loginUser = useAuthContext();
  const router = useRouter();
  if (loginUser === null) {
    router.push("/");
  }

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
      {loginUser === undefined || loginUser === null ? null : (
        <>
          <StyleComponent className="flex flex-col gap-3 rounded-xl bg-blue-600 p-4">
            <Total itemList={itemList} />
            <ItemInput />
          </StyleComponent>
          <ItemList itemList={itemList} />
        </>
      )}
    </>
  );
};

export default Page;
