import React, { useState, useEffect } from "react";
import * as S from "./Style";
import "aos/dist/aos.css";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [isBoxClicked1, setBoxClicked1] = useState(false);
  const [isBoxClicked2, setBoxClicked2] = useState(false);
  const [isBoxClicked3, setBoxClicked3] = useState(false);
  const [isBoxClicked4, setBoxClicked4] = useState(false);
  const [isBoxClicked5, setBoxClicked5] = useState(false);

  const handleBoxClick1 = () => {
    setBoxClicked1(!isBoxClicked1);
  };
  const handleBoxClick2 = () => {
    setBoxClicked2(!isBoxClicked2);
  };

  const handleBoxClick3 = () => {
    setBoxClicked3(!isBoxClicked3);
  };

  const handleBoxClick4 = () => {
    setBoxClicked4(!isBoxClicked4);
  };
  const handleBoxClick5 = () => {
    setBoxClicked5(!isBoxClicked5);
  };

  return (
    <S.BackGround>
      <S.BackImage src="Image/최종슬로건.png" alt="수정중.." />

      {/* 폐지수거노인이야기 */}
      <S.Title data-aos="fade-up">폐지 수거 노인분들의 이야기</S.Title>

      <S.BoxContainer data-aos="fade-right">
        {isBoxClicked1 ? (
          <S.Clickbox onClick={handleBoxClick1}>
            ▼ 한국노인인력개발원의 ‘폐지수집 노인 현황과 실태’ 연구보고서에
            따르면, 전국의 폐지수집 노인은 최소 1만 4800명에서 최대 1만
            5181명으로 추정된다. 이는 생계를 위해 폐지수집에 적극적으로 참여하는
            노인의 수다. <br />
            소일거리로 하거나, 다른 일을 하며 여유시간에 폐지를 줍는 노인을
            포함하면 그 수는 더욱 클 것으로 예상된다.
            <br />
            출처 : 여성신문
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick1}>
            ▶ 생계형 폐지수거노인
            <br />약 1만 5천명
          </S.Box>
        )}

        {isBoxClicked2 ? (
          <S.Clickbox onClick={handleBoxClick2}>
            ▼ 한국노인인력개발원의 ‘폐지수집 노인 현황과 실태’ 연구보고서에
            따르면, 전국의 폐지수집 노인은 최소 1만 4800명에서 최대 1만
            5181명으로 추정된다. 이는 생계를 위해 폐지수집에 적극적으로 참여하는
            노인의 수다. <br />
            소일거리로 하거나, 다른 일을 하며 여유시간에 폐지를 줍는 노인을
            포함하면 그 수는 더욱 클 것으로 예상된다.
            <br />
            출처 : 여성신문
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick2}>
            ▶ 하루 평균 폐지 수집량
            <br /> 87kg
          </S.Box>
        )}

        {isBoxClicked3 ? (
          <S.Clickbox onClick={handleBoxClick3}>
            ▼ 한국노인인력개발원의 ‘폐지수집 노인 현황과 실태’ 연구보고서에
            따르면, 전국의 폐지수집 노인은 최소 1만 4800명에서 최대 1만
            5181명으로 추정된다. 이는 생계를 위해 폐지수집에 적극적으로 참여하는
            노인의 수다. <br />
            소일거리로 하거나, 다른 일을 하며 여유시간에 폐지를 줍는 노인을
            포함하면 그 수는 더욱 클 것으로 예상된다.
            <br />
            출처 : 여성신문
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick3}>
            ▶ 하루 평균 노동 거리
            <br /> 12.3km
          </S.Box>
        )}
      </S.BoxContainer>

      <S.BoxContainer data-aos="fade-right">
        {isBoxClicked4 ? (
          <S.Clickbox onClick={handleBoxClick4}>
            ▼ 한국노인인력개발원의 ‘폐지수집 노인 현황과 실태’ 연구보고서에
            따르면, 전국의 폐지수집 노인은 최소 1만 4800명에서 최대 1만
            5181명으로 추정된다. 이는 생계를 위해 폐지수집에 적극적으로 참여하는
            노인의 수다. <br />
            소일거리로 하거나, 다른 일을 하며 여유시간에 폐지를 줍는 노인을
            포함하면 그 수는 더욱 클 것으로 예상된다.
            <br />
            출처 : 여성신문
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick4}>
            ▶ 하루 평균 노동 시간 <br /> 11시간 20분
          </S.Box>
        )}

        {isBoxClicked5 ? (
          <S.Clickbox onClick={handleBoxClick5}>
            ▼ 한국노인인력개발원의 ‘폐지수집 노인 현황과 실태’ 연구보고서에
            따르면, 전국의 폐지수집 노인은 최소 1만 4800명에서 최대 1만
            5181명으로 추정된다. 이는 생계를 위해 폐지수집에 적극적으로 참여하는
            노인의 수다. <br />
            소일거리로 하거나, 다른 일을 하며 여유시간에 폐지를 줍는 노인을
            포함하면 그 수는 더욱 클 것으로 예상된다.
            <br />
            출처 : 여성신문
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick5}>
            ▶ 평균 시급 <br /> 938원
          </S.Box>
        )}
      </S.BoxContainer>

      <S.S_Story data-aos="fade-up">
        해도 뜨지 않은 어두운 새벽, 폐지 수거 어르신은 집을 나섭니다. <br />
        하루에도 여러 차례 폐지를 주워 고물상을 드나들지만,
        <br />
        그럼에도 생계를 이어 나가기엔 턱없이 부족합니다. <br />
        프루잉은 이러한 폐지 수거 어르신에게 새로운 아침을 선물합니다.{" "}
      </S.S_Story>

      {/* 프루잉 미션 비젼 설명 */}

      <S.M_Title data-aos="fade-up">👴🏻프루잉은 폐지 수거 노인에게👵🏻</S.M_Title>
      {/* <S.Image src="Image/노인.png" alt="프루잉 이미지" /> */}

      <S.Story data-aos="fade-up">
        <span>지속 가능한 일자리</span>와 <span>공정한 임금</span>을 보장하여
        <span>경제적 어려움을 개선</span>하기 위해 노력합니다
      </S.Story>

      <S.M_Title data-aos="fade-up">👩🏻‍💻따라서, 프루잉은👨🏻‍💻</S.M_Title>
      {/* <S.Image src="Image/학생.png" alt="프루잉 이미지" /> */}

      <S.Story data-aos="fade-up">
        폐지 수거 노인을
        <span> 과일컵 정기 배송 서비스 배달원</span>
        으로 고용합니다
      </S.Story>
    </S.BackGround>
  );
}

export default Contact;
