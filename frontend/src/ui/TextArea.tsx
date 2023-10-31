type Props = {
  rows?: number;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
};

const TextArea = ({
  rows = 5,
  placeholder = "",
  required = false,
  onChange,
  value,
}: Props) => {
  return (
    <textarea
      className="resize-none invalid:border-red-300 border px-4 py-2 tracking-wide outline-none border-gray-300 w-full rounded-md"
      cols={30}
      rows={rows}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
