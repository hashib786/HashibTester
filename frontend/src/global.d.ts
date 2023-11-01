declare global {
  interface ListI {
    value: string;
    id: number;
  }

  type QuestionType = "Categorize" | "Cloze" | "MCQ";
}

const hello = "Hashib";
export default hello;
