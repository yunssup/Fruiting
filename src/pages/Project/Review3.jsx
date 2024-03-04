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
      <S.Title data-aos="fade-up">3차 체험단 진행</S.Title>
      <S.Box data-aos="fade-up">
        <S.Imagerow src="Image/3차사진수정.jpg" alt="프루잉 이미지" />
        <S.Story>
          3차 체험단은 1차에 이어 사당역 인근 거주자 분들과 함께했습니다.
          <br />
          폐지 수거 노인 분이 직접 과일컵 아침 정기 배송 서비스에 참여했으며,
          <br />
          "푸릇해 사당역점"과 함께 협업하여 과일컵을 수급하였습니다.
          <br />
          총 2회의 과일컵 새벽 배송을 성공적으로 마무리 하였습니다.
          <br />
        </S.Story>
      </S.Box>
      {/* 체험단 리뷰 */}

      <S.Title>3차 체험단 고객 리뷰</S.Title>
      <S.Box2 data-aos="fade-right">
        <S.ImageRe src="Image/망고.png" alt="프루잉 이미지" />
        <S.BoxRe>
          대학생들이 사회문제에 관심을 갖고 새로운 일자리 창출을 위해 노력했다는
          점이 체험단에 신청하게된 결정적 이유였습니다. 기성세대가 하지 못 한
          일을 시도해주셔서 고맙습니다. 응원합니다.
          <br />
          -윤** 님-
        </S.BoxRe>
      </S.Box2>

      <S.Box2 data-aos="fade-right">
        <S.ImageRe src="Image/귤.png" alt="프루잉 이미지" />
        <S.BoxRe>
          사업 취지도 동감하고 편리하고 바쁜 일상에 그날 과일을 꼭 챙겨먹게
          된다는 건강상의 유익까지 얻어서 선택했습니다.
          <br />
          -하** 님-
        </S.BoxRe>
      </S.Box2>
    </S.BackGround>
  );
}
export default ProjectReview;
