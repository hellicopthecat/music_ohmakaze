import SharedTxt from "@/components/shared/SharedTxt";

interface ILoginInputProps {
  labelTxt: string;
  name: string;
  inputType: HTMLInputElement["type"];
  placeHolder: string;
  errorTxt: Array<string>;
}
export default function LoginInput({
  labelTxt,
  name,
  inputType = "text",
  placeHolder,
  errorTxt,
}: ILoginInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-white">
        {labelTxt}
      </label>
      <input
        name={name}
        type={inputType}
        placeholder={placeHolder}
        className="px-2 py-1 rounded-md shadow-sm"
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
