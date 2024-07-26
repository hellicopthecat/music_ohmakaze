interface ISharedTxtProps {
  txtType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
  txt: string;
  className?: string;
}
export default function SharedTxt({txtType, className, txt}: ISharedTxtProps) {
  switch (txtType) {
    case "h1":
      return (
        <h1 className={`${className} text-white font-black text-7xl`}>{txt}</h1>
      );
    case "h2":
      return (
        <h2 className={`${className} text-white font-extrabold text-6xl`}>
          {txt}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${className} text-white font-bold text-5xl`}>{txt}</h3>
      );
    case "h4":
      return (
        <h4 className={`${className} text-white font-bold text-4xl`}>{txt}</h4>
      );
    case "h5":
      return (
        <h5 className={`${className} text-white font-semibold text-3xl`}>
          {txt}
        </h5>
      );
    case "h6":
      return (
        <h6 className={`${className} text-white font-semibold text-xl`}>
          {txt}
        </h6>
      );
    case "p":
      return <p className={`${className} text-white`}>{txt}</p>;
    case "span":
      return <span className={`${className} text-white`}>{txt}</span>;
    case "small":
      return <small className={`${className} font-light text-sm`}>{txt}</small>;
  }
}
