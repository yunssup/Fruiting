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
      <S.Title data-aos="fade-up">2차 체험단 진행</S.Title>
      <S.Box data-aos="fade-up">
        <S.Image src="Image/2차 체험단.png" alt="프루잉 이미지" />
        <S.Story>
          2차 체험단은 1차에 이어 사당역 인근 거주자 분들과 함께했습니다.
          <br />
          폐지 수거 노인 분이 직접 과일컵 아침 정기 배송 서비스에 참여했으며,
          <br />
          "푸릇해 사당역점"과 함께 협업하여 과일컵을 수급하였습니다.
          <br />
          총 3회의 과일컵 새벽 배송을 성공적으로 마무리 하였습니다.
          <br />
        </S.Story>
      </S.Box>
      {/* 체험단 리뷰 */}

      <S.Title>2차 체험단 고객 리뷰</S.Title>
      <S.Box2 data-aos="fade-right">
        <S.ImageReEr2 src="Image/망고.png" alt="프루잉 이미지" />
        <S.BoxRe>
          취지를 나중에 알게 되었는데 무엇보다 아이디어 훌륭하고 제 소비가 다른
          누군가에게 도움이 된다고 생각하니
          <br /> 추후에도 기꺼이 구매하고 싶은 마음이 생겼어요. 이번 프로젝트가
          성공하면 좋겠네요.
          <br /> 체험단 즐겁게 참여할 수 있게 노력해주셔서 감사합니다. <br />
          -백** 님-
        </S.BoxRe>
      </S.Box2>

      <S.Box2 data-aos="fade-right">
        <S.ImageRe src="Image/귤.png" alt="프루잉 이미지" />
        <S.BoxRe>
          아침에 과일을 먹을수 있다는 게 편리하고 내 자신에게 선물을 주는
          느낌이었어요!
          <br />
          -신** 님-
        </S.BoxRe>
      </S.Box2>
    </S.BackGround>
  );
}
export default ProjectReview;
