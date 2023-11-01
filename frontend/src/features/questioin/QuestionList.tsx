import { useState } from "react";
import QuestionItem from "./QuestionItem";
const QuestionList = () => {
  const [Questions, setQuestions] = useState<ListI[]>([
    { value: "", id: Date.now() },
  ]);

  const addQuestion = () => {
    setQuestions((question) => [...question, { value: "", id: Date.now() }]);
  };

  const deleteQuestion = (id: number) => {
    if (Questions.length <= 1) return;
    setQuestions((question) =>
      question.filter((question) => question.id !== id)
    );
  };

  return (
    <div className="flex flex-col gap-y-12 ">
      {Questions.map((question, i) => (
        <QuestionItem
          addQuestion={addQuestion}
          index={i}
          deleteQuestion={deleteQuestion}
          question={question}
        />
      ))}
    </div>
  );
};

export default QuestionList;
