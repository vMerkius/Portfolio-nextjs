import { stack_data } from "@/data/stack_data";
import Stack from "./stack";
import "../styles/about.scss";
import Image from "next/image";
const About = () => {
  return (
    <section className="about">
      <div className="about__desc">
        <div className="about__desc__img">
          <Image
            src="/images/profile.jpg"
            alt="profile"
            width={200}
            height={300}
          />
          <h3>Mateusz Rojek</h3>
        </div>
        <div className="about__desc__text">
          <h2>About me</h2>
          <p>
            I am a software engineer with a passion for building web
            applications. I have experience with JavaScript, React, Node.js, and
            Express. I am always looking to learn new technologies and improve
            my skills.
          </p>
        </div>
      </div>
      <div className="about__stack">
        {stack_data.map((item, index) => (
          <Stack key={index} technology={item} />
        ))}
      </div>
    </section>
  );
};
export default About;
