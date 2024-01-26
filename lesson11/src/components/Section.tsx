import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

function Section({ children }: SectionProps) {
  return <>{children}</>;
}

export default Section;
