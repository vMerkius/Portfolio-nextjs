import "../styles/education_experience.scss";
import Education from "./education";
import Experience from "./experience";

const EducationExperience = () => {
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
