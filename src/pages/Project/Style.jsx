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
`;
export const SubTitle = styled.div`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  text-align: center;
  margin-top: 1%;
`;
export const Line = styled.div`
  display: flex;
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
`;

export const Image = styled.img`
  width: 70%;
  height: 45%;
  margin-bottom: 8%;
`;
