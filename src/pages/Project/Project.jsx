import React from "react";
import { Link } from "react-router-dom";

import { BackGround, Title, Line, Box1, Image, Box2, Box3 } from "./Style";

function Project() {
  const linkStyle = {
    textDecoration: "none", // 밑줄 없애기
    color: "#000", // 링크 텍스트 색상 지정 (선택 사항)
  };

  return (
    <BackGround>
      <Title>프루잉 Project</Title>
      <Line>
        <Link to="/Review1" style={linkStyle}>
          <Box1>
            <Image src="./public/Image/파인애플.png" alt="프루잉 이미지" />
            1차 체험단 구경하기
          </Box1>
        </Link>
        <Link to="/Review1" style={linkStyle}>
          <Box2>
            <Image src="./public/Image/딸기.png" alt="프루잉 이미지" />
            2차 체험단 구경하기
          </Box2>
        </Link>
        <Link to="/Review1" style={linkStyle}>
          <Box3>
            <Image src="./public/Image/포도.png" alt="프루잉 이미지" />
            3차 체험단 신청하기
          </Box3>
        </Link>
      </Line>
    </BackGround>
  );
}
export default Project;
