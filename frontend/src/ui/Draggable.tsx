import { useState } from "react";
import DragImgIcon from "./DragImgIcon";
import TextArea from "./TextArea";

type Props = {
  list: ListI[];
  setList: React.Dispatch<React.SetStateAction<ListI[]>>;
  belongList?: ListI[] | undefined;
};
const Draggable = ({ belongList, list, setList }: Props) => {
  const [dragStartElement, setDragStartElement] = useState<null | HTMLElement>(
    null
  );

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
    setList((prev) => {
      const updateList = prev.map((ele, i) =>
        i === id ? { ...ele, value: e.target.value } : ele
      );
      if (updateList.length !== 0 && updateList[updateList.length - 1].value)
        updateList.push({ value: "", id: Date.now() });
      return updateList;
    });
  };

  const handleDelete = (id: number) => {
    if (list.length > 1)
      setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {list.map(({ value, id }, i) => (
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
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleCategoriesChange(e, i)
            }
            required={i + 1 !== list.length}
            rows={1}
            placeholder={`${belongList ? "Item" : "Categories"} (Optional ${
              i + 1
            })`}
          />
          <DragImgIcon
            onClick={() => handleDelete(id)}
            src="https://cdn-icons-png.flaticon.com/512/3756/3756676.png"
          />
          {belongList && (
            <select className="w-1/2 border border-gray-300 py-2 px-4 text-lg outline-none ml-7 rounded-md">
              {belongList.map(({ value }) =>
                value ? <option value={value}>{value}</option> : null
              )}
            </select>
          )}
        </div>
      ))}
    </>
  );
};

export default Draggable;
