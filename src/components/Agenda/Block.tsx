import "./Block.css";
interface BlockProps {
  time: string;
  onClick: () => void;
  selected: boolean;
}

const Block = ({ time, onClick, selected }: BlockProps) => {
  return (
    <div
      className={`agenda-block ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <p>{time}</p>
    </div>
  );
};

export default Block;


