import QuestionHeader from "./QuestionHeader";
import QuestionList from "./QuestionList";

const QuestionBox = () => {
  return (
    <main className="text-blue-900 min-h-screen py-6 px-12 max-w-7xl mx-auto flex flex-col gap-y-6">
      <QuestionHeader />
      <QuestionList />
    </main>
  );
};

export default QuestionBox;
