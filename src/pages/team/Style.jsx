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
  /* margin-top: 5%; */
`;
export const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin-top: 5%;
`;
export const MainTitle = styled.div`
  display: flex;
`;
export const Image = styled.img`
  width: 100vw;
  height: 500px;
`;
export const Story = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
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
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;
export const Box = styled.button`
  display: flex;
  flex-direction: column;
  width: 220px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
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
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
