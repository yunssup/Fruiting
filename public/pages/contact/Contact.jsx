import React from "react";

import { BackGround, Title, Box, ContactBoxBut } from "./Style";

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
      <Title>Contact 프루잉</Title>
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
        <a
          href="https://blog.naver.com/fruitingofficial"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <ContactBoxBut>
            <FontAwesomeIcon icon={faPen} size="3x" /> 블로그
          </ContactBoxBut>
        </a>
      </Box>
    </BackGround>
  );
}
export default Contact;
