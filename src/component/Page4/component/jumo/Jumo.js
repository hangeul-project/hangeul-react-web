import React from "react";
import jumo from "../../img/resultimage/jumo.png";
import textback from "../../img/text_back_line2.png";
import "./jumo.css";

function Jumo() {
  return (
    <div className="outer-container-jumo">
      <div className="container-jumo">
        <img className="textback" src={textback} alt="textback" />
        <div className="description">
          <div className="youris">조선 최고 국밥 맛집 사장님 백주모!</div>
          <div className="detail">
            당신의 손을 거치면 그 어떤 사람도
            <br />
            <br />
            김치에 국밥 한그릇 뚝딱! 하게 되죠.
            <br />
            <br />
            하지만 국밥의 맛을 살리느라
            <br />
            <br />
            한글 공부에는 조금 소홀했을지도 몰라요!
            <br />
            <br />
            앞으로는 단골 손님 챙기기도 좋지만
            <br />
            <br />
            우리말 사랑하기도 잊지 않기로 해요.
            <br />
          </div>
        </div>
        <img className="char" src={jumo} alt="캐릭터" />
      </div>
    </div>
  );
}

export default Jumo;
