import "../styles/projects.scss";
import Image from "next/image";
import logoSpiki from "../../public/images/spiki-app.png";
const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__header">Projects</h2>
      <div className="projects__proj">
        <Image
          className="projects__proj__img"
          src={logoSpiki}
          alt="project image"
          width={600}
        />
        <div className="projects__proj__desc">
          <h3 className="projects__proj__desc__header">
            Engineering Thesis - Application for support language learning
          </h3>
          <p>
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
          <div className="projects__proj__desc__stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
          <div className="projects__proj__desc__links">
            <a href="#">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
