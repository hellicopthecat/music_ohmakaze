import {FormEventHandler, MouseEventHandler} from "react";

interface ISharedBtnProps {
  className?: string;
  type: HTMLButtonElement["type"];
  disabled?: boolean;
  btnTxt: string;
  onSumbit?: FormEventHandler | undefined;
  onClick?: MouseEventHandler | undefined;
}
export default function SharedBtn({
  className,
  type,
  disabled = false,
  btnTxt,
  onSumbit,
  onClick,
}: ISharedBtnProps) {
  return (
    <button
      className={`bg-slate-500 disabled:bg-gray-300 text-white w-52 h-8 rounded-md shadow-md ${className}`}
      type={type}
      disabled={disabled}
      onSubmit={onSumbit}
      onClick={onClick}
    >
      {btnTxt}
    </button>
  );
}
