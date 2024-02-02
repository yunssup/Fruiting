// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar, NavbarMenu, Image, LogoButton } from "./Style";

function CustomNavbar() {
  return (
    <div>
      <StyledNavbar>
        <LogoButton onClick={() => console.log("Button Clicked")}>
          <Image src="./public/Image/프루잉로고.png" alt="프루잉 이미지" />
        </LogoButton>{" "}
        <NavbarMenu to={"/"}>Team</NavbarMenu>
        <NavbarMenu to={"/Project"}>Project</NavbarMenu>
        <NavbarMenu to={"/Contact"}>Contact</NavbarMenu>
      </StyledNavbar>
    </div>
  );
}

export default CustomNavbar;
