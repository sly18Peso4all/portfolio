import { Link } from "react-router-dom";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { GrMail } from "react-icons/gr";

const SocialIcons = ({ position }) => {
  return (
    <div className={position === "side" ? "icons-side" : "icons-bottom"}>
      <ul className="social-icons">
        <Link
          to="//www.linkedin.com/in/joseph-onuoha/"
          aria-label="linkedIn"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <SiLinkedin
            size={18}
            style={{ color: "#f1f1f1" }}
            className="social-icon"
          />
        </Link>
        <Link
          to="//github.com/sly18Peso4all"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <ImGithub
            size={18}
            style={{ color: "#f1f1f1" }}
            className="social-icon"
          />
        </Link>
        <Link
          to="//gmail.com"
          aria-label="Gmail"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <GrMail
            size={18}
            style={{ color: "#f1f1f1" }}
            className="social-icon"
          />
        </Link>
        <Link
          to="//www.linkedin.com/in/joseph-onuoha/"
          aria-label="facebook"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <ImFacebook
            size={18}
            style={{ color: "#f1f1f1" }}
            className="social-icon"
          />
        </Link>
      </ul>
    </div>
  );
};

export default SocialIcons;
