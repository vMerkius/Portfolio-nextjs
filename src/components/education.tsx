import React from "react";
import "../styles/education.scss";
const Education = () => {
  return (
    <div className="education">
      <h3 className="education__header">Education</h3>
      <div className="education__item">
        <strong>&#8226; Bachelor's Degree in Computer Science</strong>
        <p>10.2020 - 02.2024</p>
        <p>Bialystok University of Technology</p>
      </div>
      <div className="education__item">
        <strong>&#8226; Master's Degree in Computer Science</strong>
        <p>03.2024 - present</p>
        <p>Bialystok University of Technology</p>
      </div>
    </div>
  );
};

export default Education;
