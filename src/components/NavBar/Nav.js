import { NavLink } from "react-router-dom";

const Nav = ({ position }) => {
  return (
    <nav
      className={
        position === "top" ? "nav-top" : position === "fixed" ? "nav-fixed" : ""
      }
    >
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact-me" activeClassName="active">
            Contact-me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
