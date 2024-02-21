// Style.js
import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: #ffffff;
  border: none;
`;

export const NavbarMenu = styled.button`
  color: #303030;
  background-color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 20px;
  margin-right: 15px;
  border: none;
  font-family: Pretendard-Bold;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 13%;
`;

export const Image = styled.img`
  max-width: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  /* border: 1px solid red; */
  margin-left: 13%;
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
`;
