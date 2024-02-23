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
  border: 3px solid #ffa100;
  box-shadow: 0px 4px 4px #00000040;
  border-radius: 20px;
  width: 50%;
  height: 100px;
  margin-top: 1%;
  @media (max-width: 767px) {
    width: 90%;
    height: 100%;
    font-size: 10px;
  }
`;

export const ImageWe = styled.img`
  width: 10%;
  height: 100%;
  margin-left: 4%;
  @media (max-width: 767px) {
    margin-left: 5%;
  }
`;
export const ImageWeDo = styled.img`
  width: 10%;
  height: 95%;
  margin-left: 4%;
  @media (max-width: 767px) {
    margin-left: 5%;
    margin-top: -1%;
  }
`;
export const ImageWeEr = styled.img`
  width: 10%;
  height: 80%;
  margin-top: 2%;
  margin-left: 4%;
  @media (max-width: 767px) {
    width: 9%;
    height: 79%;
    margin-left: 6%;
    margin-top: 2px;
  }
`;
export const BoxWe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 16px;
  line-height: 200%;
  font-family: Pretendard-Medium;
  margin-left: 12%;
  @media (max-width: 767px) {
    width: 80%;
    height: 100%;
    font-size: 9px;
    margin-left: 1%;
  }
`;
