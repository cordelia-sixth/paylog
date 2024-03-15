import { Item } from "../../page";
import { ItemCard } from "./ItemCard";

/**
 * アイテムを表示するコンポーネント
 */
export const ItemList = ({ itemList }: any) => {
  return (
    <>
      {itemList.map((item: Item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </>
  );
};
