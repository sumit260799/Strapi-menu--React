import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import NavLinks from "./NavLinks";

function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("navbutton")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <h1>strapi</h1>
      <NavLinks />
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
    </nav>
  );
}

export default Navbar;
