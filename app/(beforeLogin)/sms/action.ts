"use server";

import {z} from "zod";
import validator from "validator";
import {redirect} from "next/navigation";

interface IActionState {
  token: boolean;
}

const phoneScheme = z
  .string()
  .trim()
  .refine((phone) => validator.isMobilePhone(phone, "ko-KR"));
const tokenScheme = z.coerce.number().min(100_000).max(999_999);

export default async function smsAction(
  prevState: IActionState,
  formData: FormData
) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  console.log(token);

  if (!prevState.token) {
    const result = phoneScheme.safeParse(phone);
    if (!result.success) {
      return {token: false, errorMsg: result.error.flatten()};
    } else {
      return {token: true};
    }
  } else {
    const result = tokenScheme.safeParse(token);
    if (!result.success) {
      return {
        token: true,
        errorMsg: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
