import "./lorem-header.css";

type LoremProps = {
  position: number;
};

const LoremHeader = ({ position }: LoremProps) => {
  const top = 50 * (position - 1);

  return (
    <div
      className="lorem-header"
      style={{ top: `calc(var(--header-height) + ${top}px)` }}
    >
      <h3>Lorem Header {position}</h3>
    </div>
  );
};

export default LoremHeader;
