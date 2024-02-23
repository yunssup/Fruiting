// Style.js
import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;

  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    width: 100%;
  }
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
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    margin-right: 8px;
    font-size: 12px;
  }
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 13%;
  margin-top: 2%;
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    margin-left: 0%;
    margin-top: 2%;
  }
`;

export const Image = styled.img`
  max-width: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  /* border: 1px solid red; */
  margin-left: 13%;
  margin-top: 2%;

  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    max-width: 50px;
    margin-top: 2%;
    margin-left: 0%;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
`;
