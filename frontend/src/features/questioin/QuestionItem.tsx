import { useState } from "react";
import QuestionItemHeader from "./QuestionItemHeader";
import Button from "../../ui/Button";
import CategorizeQuestion from "./CategorizeQuestion";
import ClozeQuestion from "./ClozeQuestion";
import MCQQuestion from "./MCQQuestion";

type Props = {
  addQuestion: () => void;
  deleteQuestion: (id: number) => void;
  index: number;
  question: ListI;
};
const QuestionItem = ({
  addQuestion,
  index,
  deleteQuestion,
  question: { id: questionId },
}: Props) => {
  const [questionType, setQuestionType] = useState<QuestionType>("Categorize");

  const changeQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuestionType(e.target.value as QuestionType);
  };

  return (
    <div className="border flex flex-col gap-y-4 border-gray-300 rounded-md p-4">
      <QuestionItemHeader
        index={index}
        changeQuestionType={changeQuestionType}
      />
      {questionType === "Categorize" && <CategorizeQuestion />}
      {questionType === "Cloze" && <ClozeQuestion />}
      {questionType === "MCQ" && <MCQQuestion />}
      <div className="flex gap-x-4 mt-6">
        <Button onClick={addQuestion}>Add Question</Button>
        <Button onClick={() => deleteQuestion(questionId)}>
          Delete Question
        </Button>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default QuestionItem;
