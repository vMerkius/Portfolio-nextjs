import { useState } from "react";
import "../styles/header.scss";

type HeaderProps = {
  toggleFallingAssets: () => void;
};
const Header: React.FC<HeaderProps> = ({ toggleFallingAssets }) => {
  const [isFallingEnabled, setIsFallingEnabled] = useState(true);
  const handleToggle = () => {
    setIsFallingEnabled(!isFallingEnabled);
    toggleFallingAssets();
  };

  return (
    <header className="nav-bar">
      <span
        onClick={() => {
          location.href = "";
        }}
        className="nav-bar__home"
      >
        Home
      </span>
      <div className="nav-bar__sections">
        <a href="#about" className="nav-bar__sections__option">
          About
        </a>
        <a href="#projects" className="nav-bar__sections__option">
          Projects
        </a>
        <a href="#edu_exp" className="nav-bar__sections__option">
          Education
        </a>
        <a href="#edu_exp" className="nav-bar__sections__option">
          Experience
        </a>

        <a href="#contact" className="nav-bar__sections__option">
          Contact
        </a>
        <button
          onClick={handleToggle}
          className="nav-bar__sections__option nav-bar__sections__button"
        >
          {isFallingEnabled ? "Disable Animation" : "Enable Animation"}
        </button>
      </div>
    </header>
  );
};

export default Header;
