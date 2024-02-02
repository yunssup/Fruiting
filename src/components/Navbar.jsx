// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar, NavbarMenu } from "./Style";

function CustomNavbar() {
  return (
    <div>
      <StyledNavbar>
        <Link className="NavbarMenu" to={"/"}>
          Team
        </Link>
        <Link className="NavbarMenu" to={"/Project"}>
          Project
        </Link>
        <Link className="NavbarMenu" to={"/Contact"}>
          Contact
        </Link>
      </StyledNavbar>
    </div>
  );
}

export default CustomNavbar;
