import {InputHTMLAttributes} from "react";
interface ISharedInputProps {
  name: string;
  className?: string;
}
export default function SharedInput({
  name,
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      name={name}
      className={`${className} px-2 py-1 rounded-md shadow-sm`}
    />
  );
}
