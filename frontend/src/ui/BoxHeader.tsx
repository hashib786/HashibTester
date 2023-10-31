import { ReactNode } from "react";

type Props = {
  headerText?: string;
  children?: ReactNode;
  center?: boolean;
};
const BoxHeader = ({ headerText, children, center = false }: Props) => {
  return (
    <div className="flex flex-col gap-y-3 flex-1">
      {headerText && (
        <h3 className={center ? "text-center" : ""}>{headerText}</h3>
      )}
      {children}
    </div>
  );
};

export default BoxHeader;
