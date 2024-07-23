import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="button-ribbon">
        <Link to="/a">A</Link>
        <Link to="/b">B</Link>
      </div>
    </div>
  );
};

export default Header;
