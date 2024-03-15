import { Item } from "../page";
import { formatPrice } from "./utils";

/**
 * 金額の合計を計算して表示するコンポーネント
 */
export const Total = ({ itemList }: { itemList: Item[] }) => {
  const total = itemList.reduce((prev, item) => {
    return prev + Number(item.price);
  }, 0);
  return (
    <div className="row-start-3 flex justify-between">
      <span>Total</span>
      <span>{formatPrice(total)}</span>
    </div>
  );
};
