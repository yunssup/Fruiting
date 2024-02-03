// Style.js
import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; 세로 가운데 정렬 */
  width: 100vw;
  background-color: #fffbf5;
  border: 1px solid red;
`;

export const NavbarMenu = styled.button`
  color: #656565;
  background-color: #fffbf5;
  text-decoration: none;
  border: 1px solid black;
  font-weight: bold;
  font-size: 25px;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border: 1px solid black;
`;

export const Image = styled.img`
  max-width: 80px;
  border: 1px solid black;
`;

export const CenteredContainer = styled.div`
  display: flex;
  /* align-items: center; */
`;
