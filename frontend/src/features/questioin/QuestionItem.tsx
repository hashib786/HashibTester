import { useState } from "react";
import BoxHeader from "../../ui/BoxHeader";
import DragImgIcon from "../../ui/DragImgIcon";
import TextArea from "../../ui/TextArea";
import QuestionItemHeader from "./QuestionItemHeader";

const QuestionItem = () => {
  const [dragStartElement, setDragStartElement] = useState<null | HTMLElement>(
    null
  );
  const [categoriesList, setCategoriesList] = useState([{ value: "" }]);
  const [questionText, setQuestionText] = useState("");

  function handleStartDrag(e: React.DragEvent<HTMLDivElement>) {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.add("bg-gray-100", "scale-95");
    setDragStartElement(target);
  }
  function handleStartEnd(e: React.DragEvent<HTMLDivElement>) {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.remove("bg-gray-100", "scale-95");
  }
  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    const target: HTMLElement | null = (e.target as HTMLElement).closest(
      ".dragged"
    );
    if (target && dragStartElement)
      target.insertAdjacentElement("beforebegin", dragStartElement);
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setQuestionText(e.target.value);

  const handleCategoriesChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    setCategoriesList((prev) => {
      const updateList = prev.map((ele, i) =>
        i === index ? { ...ele, value: e.target.value } : ele
      );
      if (updateList.length !== 0 && updateList[updateList.length - 1].value)
        updateList.push({ value: "" });
      return updateList;
    });
  };

  return (
    <div className="border flex flex-col gap-y-4 border-gray-300 rounded-md p-4">
      <QuestionItemHeader />
      <TextArea
        required={true}
        value={questionText}
        onChange={handleChangeText}
      />
      <div className="max-w-xs transition-all duration-200" onDrag={handleDrag}>
        <BoxHeader headerText="Categories">
          {categoriesList.map((list, i) => (
            <div
              onDragStart={handleStartDrag}
              onDragEnd={handleStartEnd}
              onDragOver={handleDragOver}
              key={i}
              draggable="true"
              className="dragged duration-200 transition-all flex items-center gap-x-1 cursor-pointer"
            >
              <DragImgIcon />
              <TextArea
                value={list.value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleCategoriesChange(e, i)
                }
                required={true}
                rows={1}
                placeholder={`Categories (Optional ${i + 1})`}
              />
            </div>
          ))}
        </BoxHeader>
      </div>
    </div>
  );
};

export default QuestionItem;
