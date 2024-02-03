// Style.jsx
import styled from "styled-components";

export const BackGround = styled.div`
  height: 100vh;
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
`;
export const Line = styled.div`
  display: flex;
`;
export const Box = styled.div`
  width: 319px;
  height: 428px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 30px;
  font-weight: bold;
  border: 3px solid #ffa100;
  text-align: center;
  flex-direction: column;
  margin-top: 3%;
`;

export const Image = styled.img`
  width: 70%;
  height: 50%;
  margin-bottom: 8%;
`;
