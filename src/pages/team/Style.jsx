// Style.jsx
import styled from "styled-components";

export const BackGround = styled.div`
  /* width: 100vw; */
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BackImage = styled.img`
  width: 100%;
  margin-top: 6%;
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-family: Pretendard-Bold;
  line-height: normal;
  text-align: center;
  margin-top: 5%;

  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    margin-top: 10%;
    font-size: 20px;
  }
`;
export const SubTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-family: Pretendard-Medium;
  line-height: normal;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 3%;

  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    margin-top: 6%;
    margin-bottom: 8%;
    font-size: 15px;
  }
`;
export const M_Title = styled.div`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin: 3% 0%;

  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 5%;
  }
`;

export const Story = styled.div`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 22px;
  font-style: normal;
  line-height: 2;
  text-align: center;

  /* margin: 1% 0%; */
  span {
    color: #ffa100;
    font-family: Pretendard-Medium;
    font-size: 22px;
    font-style: normal;
    line-height: 2;
    text-align: center;
  }
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    font-size: 14px;
    span {
      font-size: 14px;
    }
  }
`;
export const S_Story = styled.div`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 3;
  text-align: center;
  margin-bottom: 3%;
  margin-top: 3%;
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    font-size: 14px;
    margin-top: 5%;
  }
`;
export const Box = styled.button`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around; /* 가운데 정렬 및 좌우 간격 추가 */
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 3px solid #ffa100;
  color: rgba(0, 0, 0, 0.8);
  font-family: Pretendard-Bold;
  font-size: 18px;
  font-style: normal;
  font-weight: 550;
  line-height: 1.7;
  margin-right: 20px;
  margin-bottom: 3%;
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    margin-right: 10px;

    width: 110px;
    height: 70px;
    font-size: 11px;
  }
`;
export const Clickbox = styled.button`
  display: flex;
  flex-direction: column;
  width: 220px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around; /* 가운데 정렬 및 좌우 간격 추가 */
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 3px solid #ffa100;
  color: rgba(0, 0, 0, 0.8);
  font-family: Pretendard-Medium;
  font-size: 14px;
  font-style: normal;
  line-height: 1.8;
  margin-right: 20px;
  margin-bottom: 3%;
  @media (min-width: 1200px) {
  }

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (max-width: 767px) {
    margin-right: 10px;
    width: 110px;
    font-size: 10px;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextContainer = styled.div`
  margin-bottom: 5%;

  @media (max-width: 767px) {
    margin-bottom: 10%;
  }
`;
