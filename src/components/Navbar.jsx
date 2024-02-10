// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar, NavbarMenu, Image, LogoButton } from "./Style";

function CustomNavbar() {
  const linkStyle = {
    textDecoration: "none", // 밑줄 없애기
    color: "#000", // 링크 텍스트 색상 지정 (선택 사항)
  };

  return (
    <div>
      <StyledNavbar>
        <Link to="/">
          <LogoButton onClick={() => console.log("Button Clicked")}>
            <Image src="./public/Image/프루잉로고.png" alt="프루잉 이미지" />
          </LogoButton>
        </Link>{" "}
        <div style={{ marginRight: "auto" }}></div>{" "}
        <Link to="/" style={linkStyle}>
          <NavbarMenu>Fruiting</NavbarMenu>
        </Link>
        <Link to="/Fruiting" style={linkStyle}>
          <NavbarMenu>Team</NavbarMenu>
        </Link>
        <Link to="/Project" style={linkStyle}>
          <NavbarMenu>Project</NavbarMenu>
        </Link>
      </StyledNavbar>
    </div>
  );
}

export default CustomNavbar;
