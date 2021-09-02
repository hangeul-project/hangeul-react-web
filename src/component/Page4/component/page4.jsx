import React from "react";
import "../Page/Page4_css/page4.css";
import charA from "../img/img.png";
import textback from "../img/text_back_line2.png";

const ChoiceBtn = () => (
  <div className="choice">
    <button type="button" className="choice__first">
      끝내겠소
    </button>
    <button type="button" className="choice__second">
      기부하겠소
    </button>
    <button type="button" className="choice__third">
      공유하겠소
    </button>
  </div>
);

function Page4() {
  return (
    <div className="outer-container-page4">
      <div className="navbar__container brackets">
        <a href="http://www.naver.com">내부바1</a>
        <a href="http://portal.hanyang.ac.kr">내부바2</a>
        <a href="http://www.google.com">내부바3</a>
      </div>
      <div className="container">
        <div className="text">
          <img className="textback" src={textback} alt="textback" />
        </div>
        <div className="your">
          <div className="youris">당신은 언어의 대가, 사신 유씨!</div>
          <div className="description">
            어릴때부터 이웃국가들 언어를 익혀, <br /> 나라를 오가며 조선의
            외교를 담당하고 있군요.
            <br />
            <br />
            <br />
            중책을 맡아 <br />
            이나라, 저나라를 오가다보니 <br />
            우리말은 조금 헷갈릴수도 있어요!
            <br />
            <br />
            <br />
            풀이를 읽어보면 다시 금방 생각 날거예요~ <br />
            같이 다시 익혀볼까요?
            <br />
          </div>
        </div>
        <img className="char" src={charA} alt="캐릭터" />
        <ChoiceBtn />
      </div>
    </div>
  );
}

export default Page4;
