import z from "zod";
import { patters } from "../constants";
// import axios from "axios";

// const isUniqueEmail = async (email: string) => {
//   try {
//     const response = await axios.post("/api/validate-email", { email });
//     return response.data.isUnique;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };

export const schema = z.object({
  email: z
    .string()
    // 必須項目とするための記述
    .min(1, { message: "入力必須です" })
    .max(50, { message: "50文字まで" })
    // .email({ message: "メアドの形式で入力してください" })
    // 自作の正規表現も使用可能
    .regex(patters.email, {
      message: "メアドの形式で入力してください",
    }),
  // 独自のバリデーションを追加することが可能
  // .refine((text) => patters.email.test(text), {
  //   message: "Email is invalid",
  // }),
  // 課題：入力のたびにAPIが走ってしまう
  // https://github.com/orgs/react-hook-form/discussions/9005
  // .refine(isUniqueEmail, {
  //   message: "Email is already taken",
  // }),
  age: z
    .string()
    .min(1, { message: "入力必須です" })
    .transform((val) => Number(val)),
  prefecture: z.string().min(1, { message: "選択してください" }),
  policy: z
    .boolean()
    .refine((val) => val === true, { message: "入力必須です" }),
  // .tranmsform((val) => Boolean(val)),
});

export type Schema = z.infer<typeof schema>;
