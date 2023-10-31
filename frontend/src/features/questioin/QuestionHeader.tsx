import { useState } from "react";

const QuestionHeader = () => {
  const [titleText, setTittleText] = useState("Untitled Quiz");

  return (
    <>
      <header className="border-b border-gray-100 flex justify-between gap-4 flex-wrap py-3 px-5">
        <div className="">
          <input
            className="px-4 font-semibold py-2 outline-none text-lg border-b border-blue-800"
            type="text"
            value={titleText}
            onChange={(e) => setTittleText(e.target.value)}
          />
        </div>
        <div className="">
          <button className="uppercase bg-blue-500 px-7 py-2 rounded-full text-gray-50 text-lg font-semibold tracking-wide">
            save
          </button>
        </div>
      </header>
    </>
  );
};

export default QuestionHeader;
