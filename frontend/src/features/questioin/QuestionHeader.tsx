import { useState } from "react";
import Button from "../../ui/Button";

const QuestionHeader = () => {
  const [titleText, setTittleText] = useState("Untitled Quiz");

  return (
    <>
      <header className="border-b border-gray-100 flex justify-between items-center gap-4 flex-wrap py-3 px-5">
        <div className="">
          <input
            className="px-4 font-semibold py-2 outline-none text-lg border-b border-blue-800"
            type="text"
            value={titleText}
            onChange={(e) => setTittleText(e.target.value)}
          />
        </div>
        <div className="flex gap-2  ">
          <Button>Save</Button>
          <Button>Preview</Button>
        </div>
      </header>
    </>
  );
};

export default QuestionHeader;
