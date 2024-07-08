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
import Footer from "@/components/footer";
const WelcomePage = () => {
  const [isFallingEnabled, setIsFallingEnabled] = useState(true);

  const toggleFallingAssets = () => {
    setIsFallingEnabled((prev) => !prev);
  };
  return (
    <main className="container">
      <Header toggleFallingAssets={toggleFallingAssets} />
      {isFallingEnabled && <FallingAssets isEnabled={isFallingEnabled} />}
      <About />
      <Projects />
      <EducationExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default WelcomePage;
