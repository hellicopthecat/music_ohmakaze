"use server";
import z from "zod";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(10),
});
export default async function loginAction(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
