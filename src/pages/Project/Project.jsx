import React from "react";
import { Link } from "react-router-dom";

import {
  SubTitle,
  BackGround,
  Title,
  Line,
  Box1,
  Image,
  Box2,
  Box3,
} from "./Style";

function Project() {
  const linkStyle = {
    textDecoration: "none", // 밑줄 없애기
    color: "#000", // 링크 텍스트 색상 지정 (선택 사항)
  };

  return (
    <BackGround>
      <Title>프루잉 Project</Title>
      <SubTitle>
        프루잉의 프로젝트는 지속적으로 업데이트 됩니다! 많은 관심 부탁드립니다!
      </SubTitle>

      <Line>
        <Link to="/Review1" style={linkStyle}>
          <Box1>
            <Image src="Image/파인애플.png" alt="프루잉 이미지" />
            1차 체험단 구경하기
          </Box1>
        </Link>
        <Link to="/Review2" style={linkStyle}>
          <Box2>
            <Image src="Image/딸기.png" alt="프루잉 이미지" />
            2차 체험단 구경하기
          </Box2>
        </Link>
        <Link
          to="https://forms.gle/ufyXSUpgUfVQGVGSA"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Box3>
            <Image src="Image/포도.png" alt="프루잉 이미지" />
            3차 체험단 신청하기
          </Box3>
        </Link>
      </Line>
    </BackGround>
  );
}
export default Project;
