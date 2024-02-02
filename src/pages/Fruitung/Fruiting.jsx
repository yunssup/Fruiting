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
        <Image src="./public/Image/프루잉로고.png" alt="프루잉 이미지" />
        <Image src="./public/Image/인액로고.png" alt="프루잉 이미지" />
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
      <TimeBox>
        <MonthBox>4~6월</MonthBox>
        <MonthBox>7~8월</MonthBox>
        <MonthBox>9~10월</MonthBox>
        <MonthBox>11~12월</MonthBox>
      </TimeBox>

      <Hi>프루잉의 팀원들을 소개할게요</Hi>
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
