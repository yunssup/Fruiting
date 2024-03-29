import React, { useState, useEffect } from "react";
import * as S from "./ReviewStyle";
import "aos/dist/aos.css";
import AOS from "aos";

function ProjectReview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <S.BackGround>
      {/* 체험단 소개 */}
      <S.Title data-aos="fade-up">1차 체험단 진행</S.Title>
      <S.Box data-aos="fade-up">
        <S.Image src="Image/1차 체험단.png" alt="프루잉 이미지" />
        <S.Story>
          1차 체험단은 사당역 + 동국대학교 기숙사 거주자 총 20분과 함께했습니다.
          <br />
          프루잉 멤버들이 직접 과일컵 아침 정기 배송 서비스에 참여했으며,
          <br />
          "푸릇해 사당역점"과 함께 협업하여 과일컵을 수급하였습니다.
          <br />
          총 3회의 과일컵 새벽 배송을 성공적으로 마무리 하였습니다.
          <br />
        </S.Story>
      </S.Box>
      {/* 체험단 리뷰 */}

      <S.Title data-aos="fade-up">1차 체험단 고객 리뷰</S.Title>
      <S.Box2 data-aos="fade-right">
        <S.ImageReEr src="Image/망고.png" alt="프루잉 이미지" />
        <S.BoxRe>
          좋은 일 하시는 취지도 너무 좋은데 정식 서비스가 아닌데도 운영 시스템이
          잘 되고 있는 것 같아요! 덕분에 자취하면서는 잘 챙겨먹지 못하는 과일을
          집에서 편하게 먹을 수 있어서 좋았어요~ 화이팅 ㅎㅎ
          <br />
          -장** 님-
        </S.BoxRe>
      </S.Box2>

      <S.Box2 data-aos="fade-right">
        <S.ImageRe src="Image/귤.png" alt="프루잉 이미지" />

        <S.BoxRe>
          좋은 프로젝트 만들어주셔서 감사합니다. 덕분에 건강한 아침이었던 것
          같아요😊
          <br />
          -이** 님-
        </S.BoxRe>
      </S.Box2>

      <S.Box2 data-aos="fade-right">
        <S.ImageRe src="Image/사과.png" alt="프루잉 이미지" />
        <S.BoxRe>
          취지도 좋고 과일 상태도 좋아 정식 런칭되면 꼭 참여하고 싶습니다!
          감사합니다! <br />
          -강** 님-
        </S.BoxRe>
      </S.Box2>
    </S.BackGround>
  );
}
export default ProjectReview;
