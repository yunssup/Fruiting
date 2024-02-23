import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  padding: 32px 16px 20px 16px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  background-color: #f4f6fa;
  margin-top: 5%;
`;

export const FooterTitle = styled.div`
  font-family: Pretendard-Bold;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
export const FooterSubTitle = styled.div`
  font-family: Pretendard-Medium;
  line-height: 24px;
  font-size: 16px;
  /* margin-bottom: 24px; */
  @media (min-width: 1200px) {
    br.Mobile {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    br.Mobile {
      display: none;
    }
  }

  @media (max-width: 767px) {
    br.Mobile {
      display: initial;
    }
    font-size: 12.8px;
  }
`;
export const FooterLeft = styled.div`
  color: #737381;
`;
export const FooterMiniTitle = styled.div`
  font-family: Pretendard-Medium;
  font-size: 12px;
  line-height: 16px;
  color: #d6d6dd;
  @media (max-width: 767px) {
    font-size: 9.6px;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const FooterImg = styled.img`
  width: 50px;
  height: 50px;
  /* border-radius: 50px;
  background-color: #737381; */
  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;
