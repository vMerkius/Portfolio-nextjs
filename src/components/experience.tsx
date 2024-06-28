import "../styles/experience.scss";

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience__item">
        <p>
          <strong>&#8226; SUSE Polska z o.o.</strong>
        </p>
        <p>28.07.2023 - 22.10.2023</p>
        <p>Internship</p>
        <p>
          Focused on learning Kubernetes technology and NetIQ Advanced
          Authentication to implement multi-factor authentication using the
          SAML2 protocol in developed web applications.
        </p>
      </div>
      <div className="experience__item">
        <p>
          <strong>&#8226; Student Projects</strong>
        </p>
        <p>
          Engaged in several student projects, applying theoretical knowledge to
          practical tasks. Collaborated with peers to develop applications,
          solve complex problems, and deliver functional software solutions.
        </p>
      </div>
    </div>
  );
};

export default Experience;
