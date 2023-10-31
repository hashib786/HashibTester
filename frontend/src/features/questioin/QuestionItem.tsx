import TextArea from "../../ui/TextArea";
import QuestionItemHeader from "./QuestionItemHeader";

const QuestionItem = () => {
  return (
    <div className="border flex flex-col gap-y-4 border-gray-300 rounded-md p-4">
      <QuestionItemHeader />
      <TextArea />
    </div>
  );
};

export default QuestionItem;
