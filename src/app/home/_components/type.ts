import { z } from "zod";

/**
 * 入力フォームのバリデーション
 */
export const itemFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "購入したものを入力してください" })
    .max(15, { message: "15文字以内で入力してください。" }),
  price: z
    .string()
    .regex(/^[1-9][0-9]*$/, { message: "金額を入力してください" })
    .transform((inputValue, ctx) => {
      const parsedValue = Number(inputValue);
      if (parsedValue < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "¥1以上の金額を入力してください",
        });
        return z.NEVER;
      }
      return inputValue;
    }),
});
