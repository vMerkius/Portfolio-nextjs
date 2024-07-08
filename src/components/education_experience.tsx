import { useEffect } from "react";
import "../styles/education_experience.scss";
import Education from "./education";
import Experience from "./experience";

const EducationExperience = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const educationElement = document.querySelector(".education");
    const experienceElement = document.querySelector(".experience");
    const headerElement = document.querySelector(".edu_exp h2");

    if (educationElement) observer.observe(educationElement);
    if (experienceElement) observer.observe(experienceElement);
    if (headerElement) observer.observe(headerElement);

    return () => {
      if (educationElement) observer.unobserve(educationElement);
      if (experienceElement) observer.unobserve(experienceElement);
      if (headerElement) observer.unobserve(headerElement);
    };
  }, []);
  return (
    <div id="edu_exp" className="edu_exp">
      <h2>Education & Experience</h2>
      <div className="edu_exp__container">
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default EducationExperience;
