"use client";
import SharedTxt from "@/components/shared/SharedTxt";
import BeforeLoginInput from "../BeforeLoginInput";
import SharedBtn from "@/components/shared/SharedBtn";
import SharedLink from "@/components/shared/SharedLink";
import {useFormState} from "react-dom";
import joinAction from "@/app/(beforeLogin)/join/action";

export default function JoinComp() {
  const [state, action] = useFormState(joinAction, null);
  return (
    <form action={action} className="flex flex-col items-center gap-5">
      <legend>
        <SharedTxt txtType="h2" txt="회원가입" />
      </legend>
      <fieldset className="flex flex-col items-center gap-5">
        <BeforeLoginInput
          labelTxt="E-MAIL"
          name="email"
          type="email"
          placeholder="E-Mail을 입력하세요."
          errorTxt={state?.fieldErrors.email ?? []}
          required
        />
        <BeforeLoginInput
          labelTxt="이름"
          name="username"
          type="text"
          placeholder="이름을 입력하세요."
          errorTxt={state?.fieldErrors.username ?? []}
          required
        />
        <BeforeLoginInput
          labelTxt="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          errorTxt={state?.fieldErrors.password ?? []}
          required
        />
        <BeforeLoginInput
          labelTxt="비밀번호 확인"
          name="checkPass"
          type="password"
          placeholder="비밀번호를 다시 입력하세요."
          errorTxt={state?.fieldErrors.checkPass ?? []}
          required
        />
      </fieldset>
      <SharedBtn type="submit" btnTxt="회원가입" />
      <SharedLink href="/" txt="취소" />
    </form>
  );
}
