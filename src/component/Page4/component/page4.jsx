import React from "react";
import "../Page/Page4_css/page4.css";
import charA from "../img/img.png";
import textback from "../img/text_back.png";

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
      <div className="container">
        <div className="you">당신은...</div>
        <div className="youris">
          <img className="char" src={charA} alt="캐릭터" />
          <div className="text">
            <img className="textback" src={textback} alt="textback" />
            <div className="description">
              당신은 한글나라의 <br /> 최고 인기아이돌 김씨소년단입니다!
              <ChoiceBtn />
            </div>
          </div>
        </div>
        <div className="char__name">킹왕짱 세종</div>
      </div>
    </div>
  );
}

export default Page4;
