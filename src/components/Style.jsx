// Style.js
import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: #fffbf5;
`;

export const NavbarMenu = styled.button`
  color: #656565;
  background-color: #fffbf5;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  margin-right: 15px;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 800%;
`;

export const Image = styled.img`
  max-width: 80px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
`;
