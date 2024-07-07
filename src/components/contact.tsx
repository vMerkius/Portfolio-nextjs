import "../styles/contact.scss";
import Image from "next/image";
import github from "../../public/contact/github.svg";
import linkedin from "../../public/contact/linkedin.png";

import mail from "../../public/contact/mail.png";

const Contact = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <h2>Contact</h2>
        <div className="contact__container__email">
          <Image src={mail} alt="project image" width={25} />
          <span
            onClick={() => {
              copyToClipboard("elo@wp.pl)");
            }}
          >
            elo@wp.pl
          </span>
        </div>
        <div className="contact__container__socials">
          <div className="contact__container__socials__linkedin">
            <Image src={linkedin} alt="project image" width={50} />
            <span>LinkedIn</span>
          </div>
          <div className="contact__container__socials__github">
            <Image src={github} alt="project image" width={34} />
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
