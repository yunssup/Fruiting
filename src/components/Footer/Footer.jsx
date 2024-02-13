import * as S from "../Footer/FooterStyle";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterLeft>
        <S.FooterTitle>프루잉</S.FooterTitle>
        <S.FooterSubTitle>
          서울시 중구 필동로 1길 30 동국대학교
        </S.FooterSubTitle>
        <S.FooterMiniTitle>@ Fruiting. All rights reserved</S.FooterMiniTitle>
      </S.FooterLeft>

      <S.FooterRight>
        <Link
          to="https://www.instagram.com/fruiting.official/"
          style={{ textDecoration: "none" }}
        >
          <S.FooterImg src="Image/인스타.png" alt="프루잉 이미지" />
        </Link>
        <Link
          to="https://blog.naver.com/fruitingofficial"
          style={{ textDecoration: "none" }}
        >
          <S.FooterImg src="Image/블로그.png" alt="프루잉 이미지" />
        </Link>
        <a
          href="mailto:fruitingofficial@naver.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.FooterImg src="Image/메일.png" alt="프루잉 이미지" />
        </a>
        <Link
          to="http://pf.kakao.com/_xfqLxdG"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <S.FooterImg src="Image/카톡.png" alt="프루잉 이미지" />
        </Link>
      </S.FooterRight>
    </S.FooterWrapper>
  );
}

export default Footer;
