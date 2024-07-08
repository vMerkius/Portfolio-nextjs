import { useState, useEffect } from "react";
import "../styles/header.scss";

type HeaderProps = {
  toggleFallingAssets: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleFallingAssets }) => {
  const [isFallingEnabled, setIsFallingEnabled] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => {
    setIsFallingEnabled(!isFallingEnabled);
    toggleFallingAssets();
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setIsTop(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`nav-bar ${
        showHeader ? "nav-bar--visible" : "nav-bar--hidden"
      } ${isTop ? "nav-bar--top" : "nav-bar--scrolled"}`}
    >
      <span
        onClick={() => {
          location.href = "";
        }}
        className="nav-bar__home"
      >
        Mateusz Rojek
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
          {isFallingEnabled ? "Disable Falling" : "Enable Falling"}
        </button>
      </div>
    </header>
  );
};

export default Header;
