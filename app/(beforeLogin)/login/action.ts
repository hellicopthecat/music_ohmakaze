"use server";
import z from "zod";
const formSchema = z.object({
  email: z
    .string({required_error: "이메일을 입력해주세요"})
    .email("이메일 형식이 아닙니다.")
    .trim(),
  password: z
    .string({required_error: "비밀번호를 입력해주세요"})
    .min(3, "3글자 이상이여야합니다.")
    .max(10, "10자 이하여야합니다.")
    .trim(),
});
export default async function loginAction(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  setTimeout(() => {
    console.log("done");
  }, 5000);
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
