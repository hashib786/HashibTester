type Props = {
  index: number;
  changeQuestionType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const QuestionItemHeader = ({ index, changeQuestionType }: Props) => {
  return (
    <header className="flex gap-4 justify-between items-center">
      <h1 className="text-lg font-semibold">
        Question <span>{index + 1}</span>
      </h1>

      <select
        className="bg-blue-500 outline-none text-gray-50 px-6 py-2 rounded-md"
        onChange={changeQuestionType}
      >
        {["Categorize", "Cloze", "MCQ"].map((ele) => (
          <option className="border-b bg-blue-950 py-3 text-lg" value={ele}>
            {ele}
          </option>
        ))}
      </select>
    </header>
  );
};

export default QuestionItemHeader;
