import { stack_data } from "@/data/stack_data";
import Stack from "./stack";
import "../styles/about.scss";
import Image from "next/image";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__desc">
        <div className="about__desc__left">
          <h2>About me</h2>
          <p>
            I am a first-semester computer science student actively programming
            in React. Web development is the area I want to grow in, and I am
            aiming for a fullstack position in the future. I am looking for
            opportunities to use my skills and learn new practical things in
            real projects with a team. I am interested in long-term cooperation.
          </p>

          <div className="about__desc__left__stack">
            {stack_data.map((item, index) => (
              <Stack key={index} technology={item} size={50} />
            ))}
          </div>
        </div>
        <div className="about__desc__right">
          <div className="about__desc__right__img">
            <Image
              src="/images/profile.jpg"
              alt="profile"
              width={300}
              height={380}
            />
            <h3>Mateusz Rojek</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
