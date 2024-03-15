import { Item } from "../../page";
import { ItemCard } from "./ItemCard";

/**
 * アイテムを表示するコンポーネント
 */
export const ItemList = ({ itemList }: { itemList: Item[] }) => {
  return (
    <>
      {itemList.map((item, id) => {
        return <ItemCard key={id} {...item} />;
      })}
    </>
  );
};
