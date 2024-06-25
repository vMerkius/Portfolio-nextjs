// import ThreeScene from "@/components/three-scene";
"use client";

import Welcome from "@/components/welcome";
import { useState } from "react";
import Home from "./home/page";
const WelcomePage = () => {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  return (
    <div>
      {showWelcome && <Welcome setShowWelcome={setShowWelcome} />}

      {!showWelcome && <Home />}
    </div>
  );
};

export default WelcomePage;
