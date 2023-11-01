import { useState } from "react";
import BoxHeader from "../../ui/BoxHeader";
import Draggable from "../../ui/Draggable";
import TextArea from "../../ui/TextArea";

const CategorizeQuestion = () => {
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
    <>
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
    </>
  );
};

export default CategorizeQuestion;
