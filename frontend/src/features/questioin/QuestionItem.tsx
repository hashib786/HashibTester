import { useState } from "react";
import TextArea from "../../ui/TextArea";
import QuestionItemHeader from "./QuestionItemHeader";
import Draggable from "../../ui/Draggable";

const QuestionItem = () => {
  const [questionText, setQuestionText] = useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setQuestionText(e.target.value);

  return (
    <div className="border flex flex-col gap-y-4 border-gray-300 rounded-md p-4">
      <QuestionItemHeader />
      <TextArea
        required={true}
        value={questionText}
        onChange={handleChangeText}
      />
      <div className="max-w-xs transition-all duration-200">
        <Draggable />
      </div>
    </div>
  );
};

export default QuestionItem;
