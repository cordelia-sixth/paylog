"use client";

import { useAuthContext } from "@/app/_layout/provider/AuthProvider";
import { Item } from "../../page";
import { ItemCard } from "./ItemCard";

/**
 * アイテムを表示するコンポーネント
 */
export const ItemList = ({ itemList }: { itemList: Item[] }) => {
  const loginUser = useAuthContext();

  return (
    <div className="flex flex-col">
      {itemList.map((item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};
