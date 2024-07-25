"use client";
import SharedSection from "@/components/shared/SharedSection";
import LoginInput from "./LoginInput";
import SharedTxt from "@/components/shared/SharedTxt";
import SharedBtn from "@/components/shared/SharedBtn";
import {useFormState, useFormStatus} from "react-dom";
import loginAction from "@/app/(beforeLogin)/login/action";

export default function LoginComp() {
  const [state, action] = useFormState(loginAction, null);
  const {pending} = useFormStatus();
  return (
    <SharedSection className="flex justify-center items-center h-screen">
      <form action={action} className="flex flex-col items-center gap-10">
        <legend>
          <SharedTxt txtType="h2" txt="MUSIK OMAKAZE" className="text-center" />
        </legend>
        <fieldset className="flex flex-col gap-5">
          <LoginInput
            labelTxt="E-MAIL"
            name="email"
            inputType="email"
            placeHolder="이메일을 입력해주세요."
            errorTxt={state?.fieldErrors.email ?? []}
          />
          <LoginInput
            labelTxt="PASSWORD"
            name="password"
            inputType="password"
            placeHolder="비밀번호를 입력해주세요."
            errorTxt={state?.fieldErrors.password ?? []}
          />
        </fieldset>
        <SharedBtn type="submit" btnTxt="로그인" disabled={pending} />
        <SharedBtn type="button" btnTxt="회원가입" />
      </form>
    </SharedSection>
  );
}
