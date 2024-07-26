import {ButtonHTMLAttributes} from "react";

interface ISharedBtnProps {
  className?: string;
  btnTxt: string;
}
export default function SharedBtn({
  className,
  btnTxt,
}: ISharedBtnProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-orange-500 disabled:bg-gray-300 text-white w-52 h-8 rounded-md shadow-md ${className}`}
    >
      {btnTxt}
    </button>
  );
}
