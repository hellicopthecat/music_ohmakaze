"use client";
import SharedTxt from "@/components/shared/SharedTxt";
import BeforeLoginInput from "../BeforeLoginInput";
import SharedLink from "@/components/shared/SharedLink";
import SharedBtn from "@/components/shared/SharedBtn";
import {useFormState, useFormStatus} from "react-dom";
import smsAction from "@/app/(beforeLogin)/sms/action";

const initialState = {
  token: false,
  errorMsg: undefined,
};

export default function SmsComp() {
  const [state, action] = useFormState(smsAction, initialState);
  const {pending} = useFormStatus();
  return (
    <form action={action} className="flex flex-col items-center gap-10">
      <legend>
        <SharedTxt txtType="h2" txt="SMS 회원가입" />
      </legend>
      <fieldset className="flex flex-col gap-5">
        <BeforeLoginInput
          labelTxt="전화번호"
          name="phone"
          type="number"
          placeholder="휴대전화번호을 입력해주세요."
          errorTxt={state.errorMsg?.formErrors ?? []}
        />
        {state.token && (
          <BeforeLoginInput
            labelTxt="인증코드"
            name="token"
            type="text"
            placeholder="인증번호를 입력해주세요."
            errorTxt={state.errorMsg?.formErrors ?? []}
          />
        )}
      </fieldset>
      <div className="flex flex-col gap-3">
        <SharedBtn type="submit" btnTxt="로그인" disabled={pending} />
        <SharedLink href="/" txt="취소" />
      </div>
    </form>
  );
}
