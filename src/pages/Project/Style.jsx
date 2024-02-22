// Style.jsx
import styled from "styled-components";

export const BackGround = styled.div`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin-top: 1%;
`;
export const Line = styled.div`
  display: flex;
`;
export const Box1 = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  border: 3px solid #ffa100;
  text-align: center;
  flex-direction: column;
  margin-top: 8%;
  margin-left: -5%;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export const Box2 = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  border: 3px solid #ffa100;
  text-align: center;
  flex-direction: column;
  margin-top: 8%;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export const Box3 = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  border: 3px solid #ffa100;
  text-align: center;
  flex-direction: column;
  margin-top: 8%;
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
