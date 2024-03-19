import { Item } from "../../page";
import { ItemCard } from "./ItemCard";

/**
 * アイテムを表示するコンポーネント
 */
export const ItemList = ({ itemList }: { itemList: Item[] }) => {
  return (
    <div className="flex flex-col gap-3">
      {itemList.map((item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};
