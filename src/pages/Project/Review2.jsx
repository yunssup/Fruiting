import React from "react";

import {
  BackGround,
  Title,
  Story,
  Box,
  Image,
  Box2,
  ImageRe,
  BoxRebig,
  BoxRe,
} from "./ReviewStyle";

function Project() {
  return (
    <BackGround>
      {/* 체험단 소개 */}
      <Title>2차 체험단 진행</Title>
      <Box>
        <Image src="Image/2차 체험단.png" alt="프루잉 이미지" />
        <Story>
          2차 체험단은 1차에 이어 사당역 인근 거주자 분들과 함께했습니다.
          <br />
          폐지 수거 노인 분이 직접 과일컵 아침 정기 배송 서비스에 참여했으며,
          <br />
          "푸릇해 사당역점"과 함께 협업하여 과일컵을 수급하였습니다.
          <br />
          총 3회의 과일컵 새벽 배송을 성공적으로 마무리 하였습니다.
          <br />
        </Story>
      </Box>
      {/* 체험단 리뷰 */}

      <Title>2차 체험단 고객 리뷰</Title>
      <Box2>
        <ImageRe src="Image/망고.png" alt="프루잉 이미지" />
        <BoxRebig>
          취지를 나중에 알게 되었는데 무엇보다 아이디어 훌륭하고 제 소비가 다른
          누군가에게 도움이 된다고 생각하니
          <br /> 추후에도 기꺼이 구매하고 싶은 마음이 생겼어요. 이번 프로젝트가
          성공하면 좋겠네요.
          <br /> 체험단 즐겁게 참여할 수 있게 노력해주셔서 감사합니다. <br />
          -백** 님-
        </BoxRebig>
      </Box2>

      <Box2>
        <BoxRe>
          아침에 과일을 먹을수 있다는 게 편리하고 내 자신에게 선물을 주는
          느낌이었어요!
          <br />
          -신** 님-
        </BoxRe>
        <ImageRe src="Image/귤.png" alt="프루잉 이미지" />
      </Box2>

      <Box2>
        <ImageRe src="Image/사과.png" alt="프루잉 이미지" />

        <BoxRe>
          취지도 좋고 과일 상태도 좋아 정식 런칭되면 꼭 참여하고 싶습니다!
          감사합니다! <br />
          -강** 님-
        </BoxRe>
      </Box2>
    </BackGround>
  );
}
export default Project;
