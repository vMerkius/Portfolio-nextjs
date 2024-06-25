import "../styles/welcome.scss";
type WelcomeProps = {
  setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>;
};

const Welcome: React.FC<WelcomeProps> = ({ setShowWelcome }) => {
  return (
    <div className="welcome">
      <h1 className="welcome__header">Welcome to my portfolio!</h1>
      <button
        className="welcome__next"
        onClick={() => {
          setShowWelcome(false);
        }}
      >
        Lets see! &rarr;
      </button>
      {/* <ThreeScene /> */}
    </div>
  );
};

export default Welcome;
