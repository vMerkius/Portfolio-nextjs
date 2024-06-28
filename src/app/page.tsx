// import ThreeScene from "@/components/three-scene";
"use client";
import "../styles/main.scss";

import Projects from "@/components/projects";
import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import EducationExperience from "@/components/education_experience";
import Contact from "@/components/contact";
const WelcomePage = () => {
  return (
    <main className="container">
      <Header />

      {/* <Home /> */}

      <About />
      <Projects />
      <EducationExperience />
      <Contact />
    </main>
  );
};

export default WelcomePage;
