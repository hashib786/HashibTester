import { useState } from "react";
import BoxHeader from "../../ui/BoxHeader";
import DragImgIcon from "../../ui/DragImgIcon";
import TextArea from "../../ui/TextArea";
import QuestionItemHeader from "./QuestionItemHeader";

const lists = Array.from({ length: 10 }).map((_, i) => i);

const QuestionItem = () => {
  const [dragStartElement, setDragStartElement] = useState<null | HTMLElement>(
    null
  );

  function handleStartDrag(e: React.DragEvent<HTMLDivElement>) {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.add("bg-gray-100", "scale-75");
    setDragStartElement(target);
  }
  function handleStartEnd(e: React.DragEvent<HTMLDivElement>) {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.remove("bg-gray-100", "scale-75");
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

  return (
    <div className="border flex flex-col gap-y-4 border-gray-300 rounded-md p-4">
      <QuestionItemHeader />
      <TextArea />
      <div className="max-w-xs transition-all duration-200" onDrag={handleDrag}>
        <BoxHeader headerText="Categories">
          {lists.map((list, i) => (
            <div
              onDragStart={handleStartDrag}
              onDragEnd={handleStartEnd}
              onDragOver={handleDragOver}
              key={list}
              draggable="true"
              className="dragged duration-200 transition-all flex items-center gap-x-1 cursor-pointer"
            >
              <DragImgIcon />
              <TextArea
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
