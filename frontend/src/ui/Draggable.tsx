import { useState } from "react";
import DragImgIcon from "./DragImgIcon";
import TextArea from "./TextArea";
import BoxHeader from "./BoxHeader";

// type Props = {
//  list : ListI;
// }
const Draggable = () => {
  const [dragStartElement, setDragStartElement] = useState<null | HTMLElement>(
    null
  );
  const [categoriesList, setCategoriesList] = useState<ListI[]>([
    { value: "", id: Date.now() },
  ]);

  function handleStartDrag(e: React.DragEvent<HTMLDivElement>) {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.add("bg-gray-100", "scale-95");
    setDragStartElement(target);
  }
  function handleStartEnd(e: React.DragEvent<HTMLDivElement>) {
    const target: HTMLElement = e.target as HTMLElement;
    target.classList.remove("bg-gray-100", "scale-95");
  }
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    const target: HTMLElement | null = (e.target as HTMLElement).closest(
      ".dragged"
    );
    if (target && dragStartElement)
      target.insertAdjacentElement("beforebegin", dragStartElement);
  }

  const handleCategoriesChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: number
  ) => {
    setCategoriesList((prev) => {
      const updateList = prev.map((ele, i) =>
        i === id ? { ...ele, value: e.target.value } : ele
      );
      if (updateList.length !== 0 && updateList[updateList.length - 1].value)
        updateList.push({ value: "", id: Date.now() });
      return updateList;
    });
  };

  const handleDelete = (id: number) => {
    if (categoriesList.length > 1)
      setCategoriesList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
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
          <DragImgIcon src="https://cdn-icons-png.flaticon.com/512/3793/3793594.png" />
          <TextArea
            value={list.value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleCategoriesChange(e, i)
            }
            required={i + 1 !== categoriesList.length}
            rows={1}
            placeholder={`Categories (Optional ${i + 1})`}
          />
          <DragImgIcon
            onClick={() => handleDelete(list.id)}
            src="https://cdn-icons-png.flaticon.com/512/3756/3756676.png"
          />
        </div>
      ))}
    </BoxHeader>
  );
};

export default Draggable;
