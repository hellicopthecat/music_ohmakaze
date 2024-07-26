"use client";
import SharedTxt from "@/components/shared/SharedTxt";
import SharedBtn from "@/components/shared/SharedBtn";
import {useFormState, useFormStatus} from "react-dom";
import loginAction from "@/app/(beforeLogin)/login/action";
import SharedLink from "@/components/shared/SharedLink";
import BeforeLoginInput from "../BeforeLoginInput";

export default function LoginComp() {
  const [state, action] = useFormState(loginAction, null);
  const {pending} = useFormStatus();

  return (
    <form action={action} className="flex flex-col items-center gap-10">
      <legend>
        <SharedTxt txtType="h2" txt="MUSIK OMAKAZE" className="text-center" />
      </legend>
      <fieldset className="flex flex-col gap-5">
        <BeforeLoginInput
          labelTxt="E-MAIL"
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          errorTxt={state?.fieldErrors.email ?? []}
        />
        <BeforeLoginInput
          labelTxt="PASSWORD"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          errorTxt={state?.fieldErrors.password ?? []}
        />
      </fieldset>
      <div className="flex flex-col gap-3">
        <SharedBtn type="submit" btnTxt="로그인" disabled={pending} />
        <SharedLink href="/sms" txt="모바일 회원가입" />
        <SharedLink href="/join" txt="회원가입" />
      </div>
    </form>
  );
}
