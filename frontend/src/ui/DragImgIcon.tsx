const DragImgIcon = ({
  src,
  onClick = () => {},
}: {
  src: string;
  onClick?: () => void;
}) => {
  return (
    <img
      draggable="false"
      className="w-7 cursor-pointer"
      src={src}
      onClick={onClick}
      alt="Dragging Image"
    />
  );
};

export default DragImgIcon;
