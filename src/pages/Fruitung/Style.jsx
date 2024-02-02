// Style.jsx
import styled from "styled-components";

export const BackGround = styled.div`
  /* height: 100vh; */
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
export const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Hi = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 5%;
`;
export const Story = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  text-align: center;
`;
export const Logo = styled.div`
  display: flex;
  margin-top: 0%;
`;
export const Image = styled.img`
  width: 20%;
  /* height: 50%; */
  margin: 23px auto;
`;

export const TimeBox = styled.div`
  width: 80%;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 4px 4px #00000040;
`;
export const MonthBox = styled.div`
  width: 10%;
  height: 60px;
  background-color: #ffa100;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 4px 4px #00000040;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContactBoxBut = styled.button`
  display: flex;
  flex-direction: column;
  width: 246px;
  height: 207px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 550;
  line-height: 2.5;
`;
