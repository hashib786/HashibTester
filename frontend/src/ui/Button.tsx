import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="uppercase bg-blue-500 px-4 py-2 rounded-full  text-gray-50 text-base font-semibold tracking-wide duration-500 hover:bg-blue-600 active:scale-75">
      {children}
    </button>
  );
};

export default Button;
