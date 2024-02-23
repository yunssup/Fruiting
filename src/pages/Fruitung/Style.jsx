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

export const Hi = styled.div`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 3.5%;

  @media (max-width: 767px) {
    margin-top: 5%;
    font-size: 22px;
  }
`;
export const Story = styled.div`
  color: #000;
  font-size: 21px;
  font-style: normal;
  font-family: Pretendard-Medium;
  text-align: center;
  line-height: 2.5;

  @media (max-width: 767px) {
    width: 80%;
    margin-top: 5%;
    font-size: 12px;
  }
`;
export const Logo = styled.div`
  display: flex;
  margin-top: 0%;
`;
export const Image = styled.img`
  width: 22%;
  height: 80%;
  margin: 25px auto;
  @media (max-width: 767px) {
    width: 20%;
    margin-top: 5%;
    font-size: 12px;
  }
`;
export const Image1 = styled.img`
  width: 25%;
  height: 80%;
  margin: 23px auto;
  margin-top: 30px;
  @media (max-width: 767px) {
    width: 20%;
    /* margin-top: 5%; */
    font-size: 12px;
  }
`;
export const Image2 = styled.img`
  width: 25%;
  height: 80%;
  margin: 23px auto;
  margin-top: 65px;
  @media (max-width: 767px) {
    width: 20%;
    margin-top: 10%;
    font-size: 12px;
    margin-right: 10%;
  }
`;

export const ImagePlan = styled.img`
  width: 70%;
  margin: 2%;
  @media (max-width: 767px) {
    margin-top: 5%;
    margin-bottom: 5%;
    margin-right: 8%;
    width: 85%;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageWe = styled.img`
  width: 20%;
  /* @media (max-width: 767px) {
    width: 15%;
    height: 15%;
  } */
`;
export const ImageWeEr = styled.img`
  width: 15%;
  height: 20%;
  margin-top: 2%;
  margin-left: 2%;
  /* @media (max-width: 767px) {
    width: 15%;
    height: 15%;
  } */
`;
export const BoxWe = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 15px;
  /* box-shadow: 0px 4px 4px #00000040; */
  line-height: 200%;
  /* border: 2px solid #ffa100; */
  margin-top: 5%;
  font-family: Pretendard-Medium;
  span {
    font-size: 15px;
    font-family: Pretendard-Bold;
  }
  @media (max-width: 767px) {
    width: 70%;
    height: 100%;
    font-size: 10px;
  }
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
  font-family: Pretendard-Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 550;
  line-height: 2.5;
  margin-top: 5%;
  margin-right: 5%;
  /* margin-left: 5%; */
`;
