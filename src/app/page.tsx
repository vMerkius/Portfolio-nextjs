// import ThreeScene from "@/components/three-scene";
"use client";
import "../styles/main.scss";

import Projects from "@/components/projects";
import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
const WelcomePage = () => {
  return (
    <main className="container">
      <Header />

      {/* <Home /> */}

      <About />
      <Projects />
      <Education />
      <Experience />
    </main>
  );
};

export default WelcomePage;
