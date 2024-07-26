"use server";

import {z} from "zod";

const checkPassFn = ({
  password,
  checkPass,
}: {
  password: string;
  checkPass: string;
}) => password !== checkPass;

const formSchema = z
  .object({
    email: z.string({required_error: "입력해주세요"}).email().trim(),
    username: z.string({required_error: "입력해주세요"}).trim(),
    password: z
      .string({required_error: "입력해주세요"})
      .trim()
      .min(3, "3자이상으로 작성하세요"),
    checkPass: z.string({required_error: "입력해주세요"}).trim(),
  })
  .refine(checkPassFn, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["checkPass"],
  });

export default async function joinAction(prevState: any, formdata: FormData) {
  const data = {
    email: formdata.get("email"),
    username: formdata.get("username"),
    password: formdata.get("password"),
    checkPass: formdata.get("checkPass"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
