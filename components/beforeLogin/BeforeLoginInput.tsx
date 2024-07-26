import SharedInput from "@/components/shared/SharedInput";
import SharedTxt from "@/components/shared/SharedTxt";

interface ILoginInputProps {
  labelTxt: string;
  name: string;
  type: HTMLInputElement["type"];
  placeholder: string;
  className?: string;
  errorTxt: Array<string>;
  min?: number;
  max?: number;
  required?: boolean;
}
export default function BeforeLoginInput({
  labelTxt,
  name,
  type,
  placeholder,
  className,
  errorTxt,
  min,
  max,
  required = false,
}: ILoginInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-white">
        {labelTxt}
      </label>
      <SharedInput
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
        min={min}
        max={max}
        required={required}
      />
      {errorTxt &&
        errorTxt.map((txt, index) => (
          <SharedTxt
            key={index}
            txtType="small"
            txt={txt}
            className="text-rose-400"
          />
        ))}
    </div>
  );
}
