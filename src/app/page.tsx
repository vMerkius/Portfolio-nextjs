// import ThreeScene from "@/components/three-scene";
"use client";
import "../styles/main.scss";

import Projects from "@/components/projects";
import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import EducationExperience from "@/components/education_experience";
import Contact from "@/components/contact";
import { useState } from "react";
import FallingAssets from "@/components/falling_assets";
const WelcomePage = () => {
  const [isFallingEnabled, setIsFallingEnabled] = useState(true);

  const toggleFallingAssets = () => {
    setIsFallingEnabled((prev) => !prev);
  };
  return (
    <main className="container">
      <Header toggleFallingAssets={toggleFallingAssets} />
      {isFallingEnabled && <FallingAssets isEnabled={isFallingEnabled} />}

      {/* <Home /> */}

      <About />
      <Projects />
      <EducationExperience />
      <Contact />
    </main>
  );
};

export default WelcomePage;
