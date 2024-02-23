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
  margin: 2% 0%;
  @media (max-width: 767px) {
    margin-top: 10%;
    font-size: 24px;
  }
`;

export const Box = styled.div`
  width: 60%;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffa100;
  text-align: center;
  margin-top: 1%;
  margin-bottom: 2%;
  padding: 20px 0px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 90%;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 10%;
    font-size: 24px;
  }
`;
export const Story = styled.div`
  color: #000;
  font-size: 18px;
  font-family: Pretendard-Medium;
  line-height: 2.3;
  text-align: left;
  margin-left: 3%;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
export const Image = styled.img`
  width: 200px;
  height: 300px;
  @media (min-width: 768px) and (max-width: 1199px) {
    margin-left: 2%;
  }
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  border: 3px solid #ffa100;
  box-shadow: 0px 4px 4px #00000040;
  border-radius: 20px;
  width: 50%;
  /* height: 100px; */
  margin-top: 1%;
  padding: 10px 0px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 90%;
    margin-bottom: 3%;
  }
  @media (max-width: 767px) {
    border: 2px solid #ffa100;
    margin-bottom: 3%;
    width: 90%;
    height: 100%;
    font-size: 10px;
  }
`;
export const ImageRe = styled.img`
  width: 10%;
  height: 100%;
  margin-left: 4%;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    margin-left: 5%;
  }
`;
export const ImageReEr = styled.img`
  width: 10%;
  height: 100%;
  margin-left: 5%;
  margin-top: 3%;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    margin-left: 5%;
  }
`;
export const ImageReEr2 = styled.img`
  width: 10%;
  height: 100%;
  margin-left: 5%;
  margin-top: 5%;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    margin-left: 5%;
  }
`;
export const BoxRe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 16px;
  line-height: 200%;
  font-family: Pretendard-Medium;
  margin-left: 4%;
  @media (max-width: 767px) {
    width: 80%;
    height: 100%;
    font-size: 12px;
    margin-left: 1%;
  }
`;
export const BoxRebig = styled.div``;
