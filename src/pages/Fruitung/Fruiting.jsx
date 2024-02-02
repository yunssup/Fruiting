import React from "react";

import {
  BackGround,
  Title,
  Box,
  ContactBoxBut,
  Story,
  Hi,
  Image,
  Logo,
  TimeBox,
  MonthBox,
  InfoBox,
  InfoBoxContainer,
  ImageWe,
  BoxWe,
  Image2,
  Image1,
} from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Fruiting() {
  return (
    <BackGround>
      {/* 1페이지 */}
      <Hi>안녕하세요, 프루잉입니다!</Hi>
      <Logo>
        <Image src="./public/Image/동국대로고.png" alt="프루잉 이미지" />
        <Image1 src="./public/Image/프루잉로고.png" alt="프루잉 이미지" />
        <Image2 src="./public/Image/인액로고.png" alt="프루잉 이미지" />
      </Logo>
      <Story>
        <p>
          프루잉은 동국대학교 소셜벤처 창업동아리 인액터스 소속으로, 비즈니스를
          통해 사회 문제를 해결하기 위해 모인 대학생 창업팀입니다.{" "}
        </p>
        <p>
          프루잉은 폐지 수거 어르신의 경제적 문제에 주목하여 그분들이 겪고 계신
          어려움을 해결하고자 합니다.
        </p>
        <p>
          폐지 수거 일과 유사한 특성을 띄지만 안전하고 정당한 임금을 보장할 수
          있는 일자리를 창출하기 위해 노력하였고,{" "}
        </p>
        <p>
          그 결과 마을의 폐지를 수거하는 일 대신 마을 주민에게 과일컵을 배달하는
          시니어 배송원 ‘프루잉’이 탄생하였습니다.
        </p>
      </Story>
      {/* 2페이지 */}
      <Hi>지금까지 프루잉은 이렇게 달려왔어요!</Hi>
      <InfoBoxContainer>
        <InfoBox>
          팀 빌딩
          <br />
          인액터스 프로젝트 아이디어 대회 동상 <br />
          인액터스 솔루션 코칭 부트캠프 합격
        </InfoBox>
        <InfoBox>
          과일컵 정기 배송 1차 체험단 진행
          <br />
          2023 동국 창업 위크 참여 <br />
        </InfoBox>
      </InfoBoxContainer>
      <TimeBox>
        <MonthBox>4~6월</MonthBox>
        <MonthBox>7~8월</MonthBox>
        <MonthBox>9~10월</MonthBox>
        <MonthBox>11~12월</MonthBox>
      </TimeBox>
      <InfoBoxContainer>
        <InfoBox>
          푸릇해 사당역점 협업 성사
          <br />
          (사)함께 만드는 세상 "자주모여" 지원 대상 선정
        </InfoBox>{" "}
        <InfoBox>
          대학생 esg 청년 창업 아이디어 공모전 우수상
          <br />
          과일컵 정기 배송 2차 체험단 진행 <br />
        </InfoBox>
      </InfoBoxContainer>
      {/* 3페이지 */}
      <Hi>프루잉의 팀원들을 소개할게요</Hi>
      <Box>
        <ImageWe src="./public/Image/유빈.png" alt="프루잉 이미지" />
        <BoxWe>
          PM: 진유빈 (교육학/경영학)
          <br /> 프루잉의 PM으로서 프로젝트 전반을 관리하며 팀을 이끌어나가요!
        </BoxWe>
      </Box>
      <Box>
        <BoxWe>
          상품 기획 : 권두윤 (식품생명공학)
          <br /> 폐지수거노인분들에게 더 나은 일자리를 제공하기 위해 상품 기획을
          담당하고 있어요!
        </BoxWe>
        <ImageWe src="./public/Image/두윤.png" alt="프루잉 이미지" />
      </Box>
      <Box>
        <ImageWe src="./public/Image/유정.png" alt="프루잉 이미지" />
        <BoxWe>
          회계/재무 : 윤유정 (회계학) <br /> 지속 가능한 비즈니스를 위한 재무 및
          원가회계 업무를 담당하고 있어요!
        </BoxWe>
      </Box>
      <Box>
        <BoxWe>
          서비스 개발 : 김윤서 (경영학/ 컴퓨터공학) <br /> 많은 분들이 프루잉에
          대해 알 수 있도록 프루잉의 웹서비스를 개발해요!
        </BoxWe>
        <ImageWe src="./public/Image/윤서.png" alt="프루잉 이미지" />
      </Box>
      <Box>
        <ImageWe src="./public/Image/준희.png" alt="프루잉 이미지" />
        <BoxWe>
          경영/기획 : 나준희 (국제통상학) <br /> 지속 가능한 비즈니스를 위한
          재무 및 원가회계 업무를 담당하고 있어요!
        </BoxWe>
      </Box>
      <Box>
        <BoxWe>
          디자인 / 마케팅 : 김진영 (경영학) <br /> 지속 가능한 비즈니스를 위한
          재무 및 원가회계 업무를 담당하고 있어요!
        </BoxWe>
        <ImageWe src="./public/Image/진영.png" alt="프루잉 이미지" />
      </Box>
      {/* 4페이지 */}
      <Title>Contact</Title>
      <Box>
        <ContactBoxBut>
          <FontAwesomeIcon icon={faComment} size="3x" />
          카카오톡 플러스 채널
        </ContactBoxBut>
        <ContactBoxBut>
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          메일
        </ContactBoxBut>
      </Box>
      <Box>
        <ContactBoxBut>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          인스타그램
        </ContactBoxBut>

        <ContactBoxBut>
          <FontAwesomeIcon icon={faPen} size="3x" /> 블로그
        </ContactBoxBut>
      </Box>
    </BackGround>
  );
}
export default Fruiting;
