import React from "react";

import { BackGround, Title, Line, Box, Image } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Project() {
  return (
    <BackGround>
      <Title>프루잉 Project</Title>
      <Line>
        <Box>
          <Image src="./public/Image/파인애플.png" alt="프루잉 이미지" />
          1차 체험단 구경하기
        </Box>
        <Box>
          <Image src="./public/Image/포도.png" alt="프루잉 이미지" />
          2차 체험단 구경하기
        </Box>
        <Box>
          <Image src="./public/Image/딸기.png" alt="프루잉 이미지" />
          3차 체험단
          <br />
          comming soon...
        </Box>
      </Line>
    </BackGround>
  );
}
export default Project;
