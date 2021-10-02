import React from "react";
import "../css/Page4.css";
import getQuestionToAnswerMap from "../../../database/QuizService";
import { getUserSelectedAnswer } from "../../../database/LocalStorage";
import textback from "../img/text_back_line2.png";
import sasin from "../img/resultimage/sasin.png";
import jumo from "../img/resultimage/jumo.png";
import idol from "../img/resultimage/idol.png";
import hakja from "../img/resultimage/hakja.png";
import andre from "../img/resultimage/andre.png";

//  This component decide what resultpage will be shown to the user based on the user's answer rate.

const Results = () => {
  let count = 0;
  let num = 0;
  let character = "";
  let description = "";
  let pic = "";
  const questionAnswer = getQuestionToAnswerMap();

  for (let i = 0; i < 10; i += 1) {
    const userAnswer = getUserSelectedAnswer(`question${i}`);
    if (questionAnswer.get(i + 1) === userAnswer[i]) {
      count += 1;
    } //  Count how many quizes the user correctly answered
  }
  if (count < 1) {
    num = 0;
    character = "조선 최고 국밥 맛집 사장님 백주모";
    description =
      "당신의 손을 거치면 그 어떤 사람도 김치에 국밥 한그릇 뚝딱! 하게 되죠. 하지만 국밥의 맛을 살리느라 한글 공부에는 조금 소홀했을지도 몰라요! 앞으로는 단골 손님 챙기기도 좋지만 우리말 사랑하기도 잊지 않기로 해요.";
    pic = jumo;
  } else if (count < 5) {
    num = 1;
    character = "당신은 제일 잘 나가는 한복점 인기 디자이너 안두레 최";
    description =
      "대감댁 잔치, 규수댁 혼례식에는 당신의 손을 거치지 않는 옷이 없을만큼 당신의 안목은 항상 정확하죠! 그에 비해 우리말 지식에는 조금 무관심했던 것 같아요~ 이제부터는 우리말 지식 정확도를 길러보도록 해요.";
    pic = andre;
  } else if (count < 7) {
    num = 2;
    character = "당신은 한양 풍물패의 최고 인기 아이돌 김원픽";
    description =
      "당신이 나타나면 저잣거리는 마비! 엄하기로 소문난 박대감댁 마님도 당신만 나타나면 사르르 녹아요~ 어릴 때부터 가무를 익혀 신동이 된 당신에게도 살짝 부족한 게 있었으니, 바로 우리말 지식! 조금만 더 갖추면 조선팔도 최고의 아이돌이 될 수 있을 거예요!";
    pic = idol;
  } else if (count < 10) {
    num = 3;
    character = "당신은 언어의 대가, 사신 유씨";
    description =
      "어릴 때부터 이웃 국가들 언어를 익혀 나라를 오가며 조선의 외교를 담당하고 있군요. 중책을 맡아 이 나라, 저 나라를 오가다 보니 우리말은 조금 헷갈릴 수도 있어요! 풀이를 읽어보면 다시 금방 생각날 거예요~ 다시 익혀볼까요?";
    pic = sasin;
  } else {
    num = 4;
    character = "당신은 세종대왕 최고 애정 집현전 학사 이씨";
    description =
      "문제를 모두 맞추다니, 당신은 분명 세종대왕의 애정을 받고 있는 집현전 학사군요! 우리말 공부를 열심히 한 당신을 세종대왕님께서 분명 장하게 여기실 거에요. 아는 것에서 멈추지 않고, 세종대왕의 애민정신을 따라 주위 사람들에게 우리말을 알려보아요!";
    pic = hakja;
  }
  //  By this condition, resultpage is allocated to the user
  return (
    <div className="result_page">
      <button type="button" className="test-button">
        결과지 확인
      </button>
      {/* the result page is loaded when this button is clicked  */}
      <div className="container">
        <img className="textback" src={textback} alt="textback" />
        <div className="your">
          <div className="youris">당신은 {character}</div>
          <div className="description">{description}</div>
          <image className="ResultImage" alt="Result" src={pic} />
        </div>
      </div>
    </div>
  );
};

export default Results;
