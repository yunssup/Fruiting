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
export const BackImage = styled.img`
  width: 100%;
  margin-top: 6%;
`;
export const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin: 3% 0%;
`;
export const M_Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin: 3% 0%;
`;
export const MainTitle = styled.div`
  display: flex;
`;
export const Image = styled.img`
  width: 90px;
  height: 80px;
  margin-left: 15px;
`;
export const Story = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;
export const S_Story = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 3;
  text-align: center;
  margin-bottom: 3%;
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
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 550;
  line-height: 1.7;
  margin-right: 20px; /* 우측 여백 추가 */
  margin-bottom: 3%;
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
