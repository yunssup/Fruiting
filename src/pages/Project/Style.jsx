// Style.jsx
import styled from "styled-components";

export const BackGround = styled.div`
  width: 99vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin-top: 2%;
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    margin-top: 8%;
    font-size: 20px;
  }
`;
export const SubTitle = styled.div`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  text-align: center;
  margin-top: 1%;
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    width: 90%;
    margin-top: 8%;
    font-size: 17px;
    margin-bottom: 4%;
  }
`;
export const Line = styled.div`
  display: flex;
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Box1 = styled.div`
  width: 180px;
  height: 250px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-family: Pretendard-Medim;
  font-size: 18px;
  font-weight: bold;
  border: 3px solid #ffa100;
  text-align: center;
  flex-direction: column;
  margin-top: 30%;
  margin-left: -5%;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 150px;
    margin: 3% 0%;
    font-family: Pretendard-Bold;
    font-size: 20px;
  }
`;
export const Box2 = styled.div`
  width: 180px;
  height: 250px;
  font-family: Pretendard-Medim;
  font-size: 18px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  border: 3px solid #ffa100;
  text-align: center;
  flex-direction: column;
  margin-top: 30%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 150px;
    margin: 3% 0%;
    font-family: Pretendard-Bold;
    font-size: 20px;
  }
`;
export const Box3 = styled.div`
  width: 180px;
  height: 250px;
  font-family: Pretendard-Medim;
  font-size: 18px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  border: 3px solid #ffa100;
  text-align: center;
  flex-direction: column;
  margin-top: 30%;
  margin-left: 5%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 150px;
    margin: 3% 0%;
    font-family: Pretendard-Bold;
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 70%;
  height: 45%;
  margin-bottom: 8%;

  @media (max-width: 767px) {
    width: 25%;
    height: 40%;
    margin-bottom: 8%;
  }
`;
