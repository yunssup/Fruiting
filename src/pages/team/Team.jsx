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
      <S.SubTitle data-aos="fade-up">
        박스를 클릭해 자세한 내용을 확인하세요🔎
      </S.SubTitle>

      <S.BoxContainer data-aos="fade-right">
        {isBoxClicked1 ? (
          <S.Clickbox onClick={handleBoxClick1}>
            ▼ 생계형 폐지 수거 노인 약 1만 5천명이 하루 평균 11시간 20분 노동을
            하고 있습니다. 특히 취약시간에 노동하며 새벽 5시, 심지어는 새벽
            3시부터 폐지를 줍기 시작합니다.
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick1}>▶ 장시간 노동</S.Box>
        )}

        {isBoxClicked2 ? (
          <S.Clickbox onClick={handleBoxClick2}>
            ▼ 평균 시급 938원에 달하는 돈을 벌며 고된 노동을 하고 계십니다. 하루
            평균 노동 거리는 12.3km지만 일한 만큼의 대가를 받지 못하지만
            그렇다고 그만둘 수도 없습니다.
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick2}>
            ▶ 낮은 노동 대가/
            <br />
            낮은 임금
          </S.Box>
        )}

        {isBoxClicked3 ? (
          <S.Clickbox onClick={handleBoxClick3}>
            ▼ 2024년 서울 물가 기준 한끼 외식 시 기본 8000원이 넘는 시대. 폐지
            수거 노인분들은 어쩔 수 없이 컵라면으로 한 끼를 해결합니다.
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick3}>▶ 부실한 식사</S.Box>
        )}
      </S.BoxContainer>

      <S.BoxContainer data-aos="fade-right">
        {isBoxClicked4 ? (
          <S.Clickbox onClick={handleBoxClick4}>
            ▼ 현행법 상 리어카는 차로 구분됩니다. 하루 평균 폐지 수집량은 87kg.
            위험한 차도를 맨몸으로 거닐며 무거운 리어카를 끌고 다닐 수 밖에
            없습니다.
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick4}>▶ 열악한 노동 환경</S.Box>
        )}

        {isBoxClicked5 ? (
          <S.Clickbox onClick={handleBoxClick5}>
            ▼ 2017년에 한국노인인력개발원에서 조사된 바에 따르면 전국 폐지 수거
            노인은 약 6만 6천명에 달합니다. 하지만 다른 단체에 따르면
            175만명이었습니다. 이렇게 정확한 숫자도 조사되지 못한 채, 폐지 수거
            노인분들은 사회적 무관심 속에 열악한 환경에서 일할 수 밖에
            없었습니다.
          </S.Clickbox>
        ) : (
          <S.Box onClick={handleBoxClick5}>▶ 사회적 무관심</S.Box>
        )}
      </S.BoxContainer>

      <S.S_Story data-aos="fade-up">
        해도 뜨지 않은 어두운 새벽, 폐지 수거 어르신은 집을 나섭니다. <br />
        하루에도 여러 차례 폐지를 주워 고물상을 드나들지만,
        <br />
        그럼에도 생계를 이어 나가기엔 턱없이 부족합니다. <br />
        프루잉은 이러한 폐지 수거 어르신에게 새로운 아침을 선물합니다.{" "}
      </S.S_Story>
      <S.TextContainer data-aos="fade-up">
        <S.M_Title>👴🏻프루잉은 폐지 수거 노인에게👵🏻</S.M_Title>

        <S.Story>
          <span>지속 가능한 일자리</span>와 <span>공정한 임금</span>을 보장하여
          <br />
          폐지 수거 노인들의 <span> 경제적 어려움을 개선</span>하기 위해
          노력합니다.
        </S.Story>
      </S.TextContainer>
      <S.TextContainer data-aos="fade-up">
        <S.M_Title>🏃이를 위해 프루잉은🏃</S.M_Title>

        <S.Story>
          동네를 돌아 다니며 <span>폐지를 수거하는 일</span>에서 <br />
          무언가를 <span>배달하는 일로</span> 일의 특성을 전환하고자 합니다.
        </S.Story>
      </S.TextContainer>
      <S.TextContainer data-aos="fade-up">
        <S.M_Title>🍊따라서, 우리는🍊</S.M_Title>
        <S.Story>
          폐지 수거 노인을
          <span> 과일컵 정기 배송 서비스 배달원</span>
          으로 고용합니다.
        </S.Story>
      </S.TextContainer>
    </S.BackGround>
  );
}

export default Contact;
