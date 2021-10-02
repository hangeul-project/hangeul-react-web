import React from "react";
import sasin from "../../img/resultimage/sasin.png";
import textback from "../../img/text_back_line2.png";
import "./sasin.css";

function Sasin() {
  return (
    <div className="outer-container-sasin">
      <div className="container-sasin">
        <img className="textback" src={textback} alt="textback" />
        <div className="description">
          <div className="youris">한양 풍물패의 최고 인기 아이돌 김원픽!</div>
          <div className="detail">
            당신이 나타나면 저잣거리는 마비!
            <br />
            <br />
            엄하기로 소문난 박대감댁 마님도 당신만 나타나면 사르르 녹아요~
            <br />
            <br />
            어릴 때부터 가무를 익혀 신동이 된 당신에게도 살짝 부족한 게
            있었으니,
            <br />
            <br />
            바로 우리말 지식!
            <br />
            <br />
            조금만 더 갖추면 조선팔도 최고의 아이돌이 될 수 있을 거예요!
            <br />
            <br />
            우리말 사랑하기도 잊지 않기로 해요.
            <br />
          </div>
        </div>
        <img className="char" src={sasin} alt="캐릭터" />
      </div>
    </div>
  );
}

export default Sasin;
