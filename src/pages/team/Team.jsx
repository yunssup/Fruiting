import React from "react";

import { BackGround, Title, MainTitle, Image, Story } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <BackGround>
      <MainTitle>
        <Title>프루잉은 폐지 수거 노인에게</Title>
        <Image src="./public/Image/노인.png" alt="프루잉 이미지" />
      </MainTitle>
      <Story>
        <p>지속 가능한 일자리와 공정한 임금을 보장하여</p>
        <p>경제적 어려움을 개선하기 위해 노력합니다</p>
      </Story>
      <MainTitle>
        <Title>따라서, 프루잉은</Title>
        <Image src="./public/Image/학생.png" alt="프루잉 이미지" />
      </MainTitle>
      <Story>
        <p>폐지 수거 노인을</p>
        <p>과일컵 정기 배송 서비스 배달원으로 고용합니다</p>
      </Story>
    </BackGround>
  );
}
export default Contact;
