import React from "react";
import hakja from "../../img/resultimage/hakja.png";
import textback from "../../img/text_back_line2.png";
import "./hakja.css";

function Hakja() {
  return (
    <div className="outer-container-hakja">
      <div className="container-hakja">
        <img className="textback" src={textback} alt="textback" />
        <div className="description">
          <div className="youris">세종대왕 최고 애정 집현전 학사 이씨!</div>
          <div className="detail">
            문제를 모두 맞추다니,
            <br />
            <br />
            당신은 분명 세종대왕의 애정을 받고 있는 집현전 학사군요!
            <br />
            <br />
            우리말 공부를 열심히 한 당신을
            <br />
            <br />
            세종대왕님께서 분명 장하게 여기실 거에요.
            <br />
            <br />
            아는 것에서 멈추지 않고, 세종대왕의 애민정신을 따라
            <br />
            <br />
            주위 사람들에게 우리말을 알려보아요!
            <br />
          </div>
        </div>
        <img className="char" src={hakja} alt="캐릭터" />
      </div>
    </div>
  );
}

export default Hakja;
