import Link from "next/link";

interface ISharedLinkProps {
  href: string;
  className?: string;
  txt: string;
}
export default function SharedLink({href, className, txt}: ISharedLinkProps) {
  return (
    <Link
      href={href}
      className={`flex justify-center items-center bg-orange-500 disabled:bg-gray-300 text-white w-52 h-8 rounded-md shadow-md ${className}`}
    >
      {txt}
    </Link>
  );
}
