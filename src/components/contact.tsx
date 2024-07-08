import "../styles/contact.scss";
import Image from "next/image";
import github from "../../public/contact/github.svg";
import linkedin from "../../public/contact/linkedin.png";
import mail from "../../public/contact/mail.png";
import clipboard from "../../public/contact/clipboard.svg";
import { useEffect, useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <h2>Contact</h2>
        <div
          className={`contact__container__email ${
            copied ? "show-notification" : ""
          }`}
        >
          <span className="contact__container__email__copied">
            Copied to clipboard!
          </span>

          <Image src={mail} alt="mail" width={25} />
          <span
            onClick={() => {
              copyToClipboard("mateuszrojek140@gmail.com)");
            }}
          >
            elo@wp.pl
            <Image src={clipboard} alt="clipboard " width={20} />
          </span>
        </div>
        <div className="contact__container__socials">
          <div
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/mateusz-rojek-699929269"
              );
            }}
            className="contact__container__socials__linkedin"
          >
            <Image src={linkedin} alt="linkedin logo" width={50} />
            <span>LinkedIn</span>
          </div>
          <div
            onClick={() => {
              window.open("https://github.com/vMerkius");
            }}
            className="contact__container__socials__github"
          >
            <Image src={github} alt="github logo" width={34} />
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
