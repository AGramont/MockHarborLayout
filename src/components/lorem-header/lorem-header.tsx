import "./lorem-header.css";

type LoremProps = {
  position: number;
};

const LoremHeader = ({ position }: LoremProps) => {
  const topHeaderHeight = 70; // the height of the header
  const top = topHeaderHeight + 50 * (position - 1);

  return (
    <div className="lorem-header" style={{ top: `${top}px` }}>
      <h3>Lorem Header {position}</h3>
    </div>
  );
};

export default LoremHeader;
