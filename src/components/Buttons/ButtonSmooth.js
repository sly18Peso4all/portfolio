import { Link } from "react-scroll";

const ButtonSmooth = ({ text, url, type }) => {
  return (
    <div>
      <Link
        to={url}
        className={`btn btn-${type}`}
        smooth={true}
        duration={1000}
        offset={-70}
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonSmooth;
