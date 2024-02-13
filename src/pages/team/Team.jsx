import React from "react";

import {
  BackGround,
  Title,
  MainTitle,
  Image,
  Story,
  Box,
  BoxContainer,
  S_Story,
  BackImage,
} from "./Style";

function Contact() {
  return (
    <BackGround>
      <BackImage src="Image/최종슬로건.png" alt="수정중.." />
      {/* <BackImage src="Image/슬로건유정.png" alt="수정중.." /> */}

      {/* 폐지수거노인이야기 */}
      <Title>폐지 수거 노인분들의 이야기</Title>
      <BoxContainer>
        <Box>
          생계형 폐지수거노인
          <br />약 1만 5천명
        </Box>
        <Box>
          하루 평균 폐지 수집량 <br />
          87kg
        </Box>{" "}
        <Box>
          하루 평균 노동 거리
          <br />
          12.3km
        </Box>{" "}
      </BoxContainer>
      <BoxContainer>
        <Box>
          하루 평균 노동 시간
          <br />
          11시간 20분
        </Box>{" "}
        <Box>
          평균 시급
          <br />
          938원
        </Box>{" "}
      </BoxContainer>
      <S_Story>
        해가 뜨지도 않은 새벽, 폐지수거노인분들은 집을 나섭니다. <br />
        하루에도 몇번씩 폐지를 주워 고물상을 드나들지만 생계를 이어나가기엔
        <br />
        턱없이 부족합니다.
      </S_Story>
      <MainTitle>
        <Title>프루잉은 폐지 수거 노인에게</Title>
      </MainTitle>
      <Story>
        <p>
          <span style={{ color: "#FFA100" }}>지속 가능한 일자리</span>와{" "}
          <span style={{ color: "#FFA100" }}>공정한 임금</span>을 보장하여
        </p>
        <p>
          {" "}
          <span style={{ color: "#FFA100" }}>경제적 어려움을 개선</span>하기
          위해 노력합니다
        </p>
      </Story>
      <MainTitle>
        <Title>따라서, 프루잉은</Title>
        {/* <Image src="./public/Image/학생.png" alt="프루잉 이미지" /> */}
      </MainTitle>
      <Story>
        <p>폐지 수거 노인을</p>
        <p>
          <span style={{ color: "#FFA100" }}>
            과일컵 정기 배송 서비스 배달원
          </span>
          으로 고용합니다
        </p>
      </Story>
    </BackGround>
  );
}
export default Contact;
