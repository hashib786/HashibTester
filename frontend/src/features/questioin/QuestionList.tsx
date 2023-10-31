import QuestionItem from "./QuestionItem";

const QuestionList = () => {
  return (
    <div className="flex flex-col gap-y-4 ">
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
    </div>
  );
};

export default QuestionList;
