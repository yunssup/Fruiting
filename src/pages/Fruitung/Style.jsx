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
`;
export const Title = styled.div`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: "Black Han Sans", sans-serif;
  margin: 1% 0%;
`;
export const Hi = styled.div`
  color: #000;
  font-family: "Black Han Sans", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 5%;
`;
export const Story = styled.div`
  color: #000;
  font-size: 21px;
  font-style: normal;
  font-family: "Black Han Sans", sans-serif;
  text-align: center;
  font-weight: 400;
`;
export const Logo = styled.div`
  display: flex;
  margin-top: 0%;
`;
export const Image = styled.img`
  width: 22%;
  height: 80%;

  margin: 25px auto;
`;
export const Image1 = styled.img`
  width: 25%;
  height: 80%;

  margin: 23px auto;
  margin-top: 30px;
`;
export const Image2 = styled.img`
  width: 25%;
  height: 80%;
  margin: 23px auto;
  margin-top: 65px;
`;
export const Run = styled.div`
  color: #000;
  font-family: "Black Han Sans", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 1% 0%;
`;
export const TimeBox = styled.div`
  width: 60%;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 요소 사이에 공간을 동일하게 배분합니다 */
  /* padding: 0 20px; */
  color: #000;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 4px 4px #00000040;
`;

export const MonthBox = styled.div`
  width: 18%;
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

  &:first-child {
    margin-left: 0; /* 첫 번째 MonthBox의 왼쪽 마진을 0으로 설정 */
  }

  &:last-child {
    margin-right: 0; /* 마지막 MonthBox의 오른쪽 마진을 0으로 설정 */
  }
`;

export const InfoBoxTop1 = styled.div`
  display: flex;
  width: 22%;
  height: 120px;
  background-color: #ffffff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0px 4px 4px #00000040;
  line-height: 200%;
  border: 2px solid #ffa100;
  margin-left: 20%;
`;
export const InfoBoxTop2 = styled.div`
  display: flex;
  width: 22%;
  height: 120px;
  background-color: #ffffff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0px 4px 4px #00000040;
  line-height: 200%;
  border: 2px solid #ffa100;
  margin-right: 25%;
`;
export const InfoBoxBottom1 = styled.div`
  display: flex;
  width: 25%;
  height: 120px;
  background-color: #ffffff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0px 4px 4px #00000040;
  line-height: 200%;
  border: 2px solid #ffa100;
  margin-left: 37%;
`;
export const InfoBoxBottom2 = styled.div`
  display: flex;
  width: 24%;
  height: 120px;
  background-color: #ffffff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0px 4px 4px #00000040;
  line-height: 200%;
  border: 2px solid #ffa100;
  margin-right: 6%;
`;
export const InfoBoxContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  margin: 2% 0%;
  justify-content: space-between;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ImageWe = styled.img`
  width: 20%;
`;
export const BoxWe = styled.div`
  display: flex;
  width: 120%;
  height: 80px;
  background-color: #ffffff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0px 4px 4px #00000040;
  line-height: 200%;
  border: 2px solid #ffa100;
  margin-top: 5%;
`;
export const ContactBoxBut = styled.button`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 207px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 2px solid #ffa100;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 550;
  line-height: 2.5;
  margin-top: 5%;
  margin-right: 5%;
  /* margin-left: 5%; */
`;
