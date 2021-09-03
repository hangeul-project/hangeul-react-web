import React from "react";
import "../Page/Page4_css/page4s.css";
import charA from "../img/img.png";

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

const Page4s = () => {
  return (
    <>
      <div className="navbar__container brackets">
        <a href="http://www.naver.com">내부바1</a>
        <a href="http://portal.hanyang.ac.kr">내부바2</a>
        <a href="http://www.google.com">내부바3</a>
      </div>
      <div className="outer-container-page4">
        <div className="grid__container">
          <div className="item1">어디에 공유하겠소?</div>
          <div className="item2">카카오톡</div>
          <div className="item3" />
          <div className="item4">인스타그램</div>
          <div className="item5">페이스북</div>
          <div className="item3" />
          <div className="item6">트위터</div>
          <div className="item3" />
          <div className="item3" />
        </div>
        <div className="char__img">
          <img className="char" src={charA} alt="캐릭터" />
        </div>
      </div>
    </>
  );
};

export default Page4s;
