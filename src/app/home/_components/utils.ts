import { addMinutes } from "date-fns";

/**
 * 日本円の表記に変更する
 * @param price 価格
 * @returns 日本円表記の文字列
 */
export const formatPrice = (price: number): string =>
  price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

/**
 * 日時を日本時間に修正する
 */
export const formatTime = (target: number): string => {
  const date = new Date(target);
  const jtc = addMinutes(date, 9 * 60);
  const year = jtc.getUTCFullYear();
  const month = jtc.getUTCMonth() + 1;
  const day = jtc.getUTCDate();
  return `${year}.${month}.${day}`;
};
