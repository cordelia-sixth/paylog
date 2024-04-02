"use client";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ItemInput } from "./_components/ItemInput";
import { ItemList } from "./_components/itemlist";
import { Total } from "./_components/Total";
import { StyleComponent } from "../../_layout/StyleComponent";
import { firebaseStore } from "@/lib/firebase/client";
import { useAuthContext } from "../../_layout/provider/AuthProvider";
import { useRouter } from "next/navigation";

export type Item = {
  /** アイテムID */
  id: string;
  /** アイテム名 */
  name: string;
  /** 金額 */
  price: string;
  /** 作成日時 */
  createdAt: number;
  /** ユーザーID */
  userId: string;
};

/**
 * ログイン後のトップページ
 */
const Page = () => {
  const router = useRouter();
  const loginUser = useAuthContext();
  if (loginUser === null) {
    router.push("/login");
  }

  const [itemList, setItemList] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    const q = query(
      collection(firebaseStore, `users/${loginUser?.id}/items/`),
      orderBy("createdAt", "desc"),
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        let items: Item[] = [];
        snapshot.forEach((doc) => {
          items.push({
            ...(doc.data() as Item),
            id: doc.id,
          });
        });
        setItemList(items);
      },
      (error) => {
        console.log("onSnapshot error", error);
      },
    );

    return () => unsubscribe();
  }, [loginUser]);

  if (!loginUser) {
    return null;
  }

  if (itemList === undefined) {
    return null;
  } else {
    return (
      <>
        <StyleComponent className="flex flex-col gap-3 rounded-xl bg-blue-600 p-4 shadow-custom">
          <Total itemList={itemList} />
          <ItemInput />
        </StyleComponent>
        <ItemList itemList={itemList} />
      </>
    );
  }
};

export default Page;
