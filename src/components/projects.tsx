import "../styles/projects.scss";
import Image from "next/image";
import logoSpiki from "../../public/images/spiki-app.png";
import Stack from "./stack";
import Slider from "./slider";

const stack_first_data = [
  "react",
  "typescript",
  "html",
  "css",
  "sass",
  "git",
  "DOTNET",
  "c",
];
const stack_second_data = [
  "react",
  "node",
  "mongodb",
  "typescript",
  "html",
  "css",
  "sass",
  "git",
];
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__header">Projects</h2>
      <div className="projects__proj">
        <div className="projects__proj__img">
          <Slider
            image1="/images/boosting1.png"
            image2="/images/boosting2.png"
          />
        </div>
        {/* <Image
          className="projects__proj__img"
          src={logoSpiki}
          alt="project image"
          width={600}
        /> */}
        <div className="projects__proj__desc">
          <h3 className="projects__proj__desc__header">
            BoostersDEN - Application for boosting and coaching in games
          </h3>
          <p className="projects__proj__desc__text">
            BoostersDEN is a web application designed to provide boosting and
            coaching services for various games. The application offers a
            user-friendly interface where players can connect with professional
            boosters and coaches to improve their gaming skills and rank. Key
            features include the ability to select specific games and services,
            schedule sessions with top-tier coaches, track progress through
            detailed analytics, and access a variety of training materials.
            BoostersDEN supports multiple games and offers a secure payment
            system to ensure safe transactions. Users can also provide feedback
            and rate their sessions, ensuring high-quality service.
          </p>
          <div className="projects__proj__desc__links">
            <a href="#">Github</a>
            <a href="#">Demo</a>
          </div>
          <div className="projects__proj__desc__stack">
            {stack_second_data.map((item, index) => (
              <Stack key={index} technology={item} size={50} />
            ))}
          </div>
        </div>
      </div>
      <div className="projects__proj">
        <div className="projects__proj__desc">
          <h3 className="projects__proj__desc__header">
            Engineering Thesis - Application for support language learning
          </h3>
          <p className="projects__proj__desc__text">
            The project focuses on designing and implementing a web application
            for language learning. The application facilitates learning through
            various exercises, and users have access to an integrated
            dictionary. Its flexible architecture allows easy addition of new
            languages and materials. User features include selecting a language,
            using the built-in dictionary, setting the learning level,
            participating in quizzes and tests on new material, and reviewing
            previous content via a voice interface. The application also
            supports learning through flashcards and tracking personal progress.
          </p>
          <div className="projects__proj__desc__links">
            <a href="#">Github</a>
            <a href="#">Demo</a>
          </div>
          <div className="projects__proj__desc__stack">
            {stack_first_data.map((item, index) => (
              <Stack key={index} technology={item} size={50} />
            ))}
          </div>
        </div>
        <div className="projects__proj__img">
          <Slider image1="/images/spiki1.png" image2="/images/spiki2.png" />
        </div>
      </div>
      <div className="projects__proj">
        <div className="projects__proj__img">
          <Slider image1="/images/sort1.png" image2="/images/sort2.png" />
        </div>
        <div className="projects__proj__desc">
          <h3 className="projects__proj__desc__header">
            Sorting Algorithm Visualizer
          </h3>
          <p className="projects__proj__desc__text">
            The application is designed to present sorting algorithms in an
            interactive and comprehensible manner. It allows visualization of
            sorting algorithms such as bubble sort, selection sort, insertion
            sort, and others. Users can modify input data, adjust the
            presentation speed, and track the stages of each sorting process.
            The application enables understanding of sorting algorithms by
            directly observing the process.
          </p>
          <div className="projects__proj__desc__links">
            <a href="#">Github</a>
            <a href="#">Demo</a>
          </div>
          <div className="projects__proj__desc__stack">
            {stack_first_data.map((item, index) => (
              <Stack key={index} technology={item} size={50} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
