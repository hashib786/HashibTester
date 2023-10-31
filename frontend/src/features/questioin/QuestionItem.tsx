import { useState } from "react";
import TextArea from "../../ui/TextArea";
import QuestionItemHeader from "./QuestionItemHeader";
import Draggable from "../../ui/Draggable";
import BoxHeader from "../../ui/BoxHeader";

const QuestionItem = () => {
  const [questionText, setQuestionText] = useState("");
  const [categoriesList, setCategoriesList] = useState<ListI[]>([
    { value: "", id: Date.now() },
  ]);
  const [itemList, setItemList] = useState<ListI[]>([
    { value: "", id: Date.now() },
  ]);

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setQuestionText(e.target.value);

  return (
    <div className="border flex flex-col gap-y-4 border-gray-300 rounded-md p-4">
      <QuestionItemHeader />
      <TextArea
        required={true}
        value={questionText}
        onChange={handleChangeText}
      />
      <div className="max-w-xs transition-all duration-200">
        <BoxHeader headerText="Categories">
          <Draggable list={categoriesList} setList={setCategoriesList} />
        </BoxHeader>
      </div>
      <div className="flex text-center justify-between gap-x-3 flex-wrap">
        <BoxHeader headerText="Item" />
        <BoxHeader headerText="Belongs To" />
      </div>
      <Draggable
        list={itemList}
        setList={setItemList}
        belongList={categoriesList}
      />
    </div>
  );
};

export default QuestionItem;
