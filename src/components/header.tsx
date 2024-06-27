import "../styles/header.scss";
const Header = () => {
  return (
    <header className="nav-bar">
      <span className="nav-bar__home">Home</span>
      <div className="nav-bar__sections">
        <span className="nav-bar__sections__option">About</span>
        <span className="nav-bar__sections__option">Projects</span>
        <span className="nav-bar__sections__option">Education</span>
        <span className="nav-bar__sections__option">Experience</span>

        <span className="nav-bar__sections__option">Contact</span>
      </div>
    </header>
  );
};

export default Header;
