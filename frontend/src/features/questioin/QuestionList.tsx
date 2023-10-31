import { useState } from "react";
import QuestionItem from "./QuestionItem";
const QuestionList = () => {
  const [Questions, setQuestions] = useState([1, 2]);

  const addQuestion = () => {
    setQuestions((question) => [...question, question.length]);
  };

  return (
    <div className="flex flex-col gap-y-12 ">
      {Questions.map(() => (
        <QuestionItem addQuestion={addQuestion} />
      ))}
    </div>
  );
};

export default QuestionList;
