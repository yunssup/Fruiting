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
      <Title>
        과일컵으로 싱그러운 아침을, <br />
        폐지 수거 어르신에게 싱그러운 미래를
      </Title>

      {/* <Image src="./public/Image/슬로건배경.png" alt="프루잉 이미지" /> */}

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
