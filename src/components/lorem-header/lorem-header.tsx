import "./lorem-header.css";

type LoremProps = {
  position: number;
};

// Props are no longer needed for this header
const LoremHeader = ({ position }: LoremProps) => {
  //const top = 50 * (position - 1);

  return (
    <div className="lorem-header" style={{ top: `var(--header-height)` }}>
      <h3>Lorem Header {position}</h3>
    </div>
  );
};

export default LoremHeader;
