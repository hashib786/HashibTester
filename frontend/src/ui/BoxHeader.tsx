import { ReactNode } from "react";

type Props = {
  headerText: string;
  children?: ReactNode;
};
const BoxHeader = ({ headerText, children }: Props) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h3>{headerText}</h3>
      {children}
    </div>
  );
};

export default BoxHeader;
