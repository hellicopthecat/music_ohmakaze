import SharedSection from "@/components/shared/SharedSection";
import {ReactNode} from "react";

export default function BeforeLgoinLayout({children}: {children: ReactNode}) {
  return (
    <SharedSection className="flex justify-center items-center h-screen">
      {children}
    </SharedSection>
  );
}
