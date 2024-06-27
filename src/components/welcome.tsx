"use client";

import { useRouter } from "next/navigation";
import "../styles/welcome.scss";

const Welcome = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <section
      className="welcome"
      style={{ backgroundImage: `url(/bg/bg-1.jpg)` }}
    >
      <h1 className="welcome__header">Welcome to my portfolio!</h1>
      <button onClick={handleNavigation} className="welcome__next">
        Lets see! &rarr;
      </button>
    </section>
  );
};

export default Welcome;
