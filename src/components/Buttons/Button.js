import { Link } from "react-router-dom";

const Button = ({ text, url, type, target, rel }) => {
  return (
    <div>
      <Link to={url} className={`btn btn-${type}`} target={target} rel={rel}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
