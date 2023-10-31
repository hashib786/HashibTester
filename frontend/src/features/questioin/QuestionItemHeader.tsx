const QuestionItemHeader = () => {
  return (
    <header className="flex gap-4 justify-between items-center">
      <h1 className="text-lg font-semibold">
        Question <span>1</span>
      </h1>

      <select className="bg-blue-500 outline-none text-gray-50 px-6 py-2 rounded-md">
        <option className="border-b bg-blue-950 py-3 text-lg" value="">
          Categorize
        </option>
        <option className="border-b bg-blue-950 py-3 text-lg" value="">
          Cloze
        </option>
        <option className="border-b bg-blue-950 py-3 text-lg" value="">
          MCQ
        </option>
      </select>
    </header>
  );
};

export default QuestionItemHeader;
