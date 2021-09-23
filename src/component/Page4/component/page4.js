import React from "react";
import "../Page4_css/Page4.css";
import charA from "../img/img.png";
import ResultPage from "./ResultPage";

const ChoiceBtn = () => {
  return (
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
};

export default function Page4() {
  return (
    <div className="outer-container-page4">
      <div className="navbar__container brackets">
        <a href="http://www.naver.com">내부바1</a>
        <a href="http://portal.hanyang.ac.kr">내부바2</a>
        <a href="http://www.google.com">내부바3</a>
      </div>
      <div>
        <ResultPage />
      </div>
      <div>
        <img className="char" src={charA} alt="캐릭터" />
        <ChoiceBtn />
      </div>
    </div>
  );
}
