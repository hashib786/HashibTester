import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const Button = ({ children, onClick = () => {} }: Props) => {
  return (
    <button
      onClick={onClick}
      className="uppercase bg-blue-500 px-4 py-2 rounded-full  text-gray-50 text-base font-semibold tracking-wide duration-500 hover:bg-blue-600 active:scale-95"
    >
      {children}
    </button>
  );
};

export default Button;
