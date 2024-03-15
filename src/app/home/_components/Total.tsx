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
    <div className="overflow-y-auto">
      <p className="pl-[3px] text-slate-300/[.8]">Total</p>
      <p className="text-3xl text-slate-200">{formatPrice(total)}</p>
    </div>
  );
};
