"use client";

import { ItemCard } from "@/app/(auth)/home/_components/itemlist/ItemCard";
import { Item } from "@/app/(auth)/home/page";
import { useAuthContext } from "@/app/_layout/provider/AuthProvider";

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
