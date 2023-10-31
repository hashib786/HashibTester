type Props = {
  rows?: number;
  placeholder?: string;
};

const TextArea = ({ rows = 5, placeholder = "" }: Props) => {
  return (
    <textarea
      className="resize-none border px-4 py-2 tracking-wide outline-none border-gray-300 w-full rounded-md"
      cols={30}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
