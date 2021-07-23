import { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleMenu = () => setIsHamburgerOpen(!isHamburgerOpen);

  return (
    <header className="header-container">
      <Logo />

      <Nav position={"top"} />

      <div className="hamburger" onClick={toggleMenu}>
        {isHamburgerOpen ? (
          <VscClose size={25} style={{ color: "#bababa" }} />
        ) : (
          <FiMenu size={25} style={{ fill: "#bababa" }} />
        )}
      </div>

      {isHamburgerOpen && <Nav position={"fixed"} />}
    </header>
  );
};

export default Header;
