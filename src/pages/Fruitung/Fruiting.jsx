import React, { useState, useEffect } from "react";
import * as S from "./Style";
import "aos/dist/aos.css";
import AOS from "aos";

function Fruiting() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <S.BackGround>
        {/* 1페이지 */}
        <S.Hi data-aos="fade-up">안녕하세요, 프루잉입니다!</S.Hi>
        <S.Logo>
          <S.Image
            data-aos="fade-up"
            src="Image/동국대로고.png"
            alt="수정중.."
          />
          <S.Image1
            data-aos="fade-up"
            src="Image/프루잉로고.png"
            alt="프루잉 이미지"
          />
          <S.Image2
            data-aos="fade-up"
            src="Image/인액로고.png"
            alt="프루잉 이미지"
          />
        </S.Logo>
        <S.Story data-aos="fade-up">
          프루잉은 동국대학교 소셜벤처 창업동아리 인액터스 소속으로, 비즈니스를
          통해 사회 문제를 해결하기 위해 모인 대학생 창업팀입니다. <br />
          프루잉은 폐지 수거 어르신의 경제적 문제에 주목하여 그분들이 겪고 계신
          어려움을 해결하고자 합니다.
          <br />
          폐지 수거 일과 유사한 특성을 띄지만 안전하고 정당한 임금을 보장할 수
          있는 일자리를 창출하기 위해 노력하였고, <br />그 결과, 매일 동네를
          돌아다니며 폐지를 수집하는 대신 과일컵을 배달하는 새로운 일자리
          창출하였습니다.
        </S.Story>
        {/* 2페이지 */}
        <S.Hi data-aos="fade-up">지금까지 프루잉은 이렇게 달려왔어요!</S.Hi>
        <S.ImagePlan
          data-aos="fade-right"
          src="Image/프루잉일정업데이트3월.png"
          alt="수정중.."
        />

        {/* 3페이지 */}
        <S.Run data-aos="fade-up">프루잉의 팀원들을 소개할게요</S.Run>
        <S.Box data-aos="fade-right">
          <S.ImageWe src="Image\유빈.png" alt="유빈 사진 수정..." />
          <S.BoxWe>
            PM: 진유빈 (교육학/경영학)
            <br /> 프루잉의 PM으로서 프로젝트 전반을 관리하며 팀을 이끌어나가요!
          </S.BoxWe>
        </S.Box>

        <S.Box data-aos="fade-right">
          <S.ImageWeDo src="Image/두윤.png" alt="프루잉 이미지" />{" "}
          <S.BoxWe>
            상품 기획 : 권두윤 (식품생명공학)
            <br /> 더 나은 일자리를 위해 고객과 프루잉을 연결할 수 있는 상품을
            기획해요!
          </S.BoxWe>
        </S.Box>

        <S.Box data-aos="fade-right">
          <S.ImageWe src="Image/유정.png" alt="프루잉 이미지" />
          <S.BoxWe>
            회계/재무 : 윤유정 (회계학)
            <br /> 지속 가능한 비즈니스를 위한 재무 및 원가회계 업무를 담당하고
            있어요!
          </S.BoxWe>
        </S.Box>

        <S.Box data-aos="fade-right">
          <S.ImageWeEr src="Image/윤서배경없음.png" alt="프루잉 이미지" />
          <S.BoxWe>
            서비스 개발 : 김윤서 (경영학/ 컴퓨터공학) <br /> 많은 분들이
            프루잉에 대해 알 수 있도록 프루잉의 웹서비스를 개발해요!
          </S.BoxWe>
        </S.Box>

        <S.Box data-aos="fade-right">
          <S.ImageWe src="Image/준희.png" alt="프루잉 이미지" />
          <S.BoxWe>
            경영/기획 : 나준희 (국제통상학) <br /> 안정적인 일자리 창출과
            프루잉을 위해 경영과 기획을 담당하고 있어요!
          </S.BoxWe>
        </S.Box>
      </S.BackGround>
    </>
  );
}
export default Fruiting;
