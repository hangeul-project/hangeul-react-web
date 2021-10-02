import React from "react";
import andre from "../../img/resultimage/andre.png";
import textback from "../../img/text_back_line2.png";
import "./andre.css";

function Andre() {
  return (
    <div className="outer-container-andre">
      <div className="container-andre">
        <img className="textback" src={textback} alt="textback" />
        <div className="description">
          <div className="youris">
            잘 나가는 한복점 인기 디자이너 안두레 최!
          </div>
          <div className="detail">
            대감댁 잔치, 규수댁 혼례식에는
            <br />
            <br />
            당신의 손을 거치지 않는 옷이 없을만큼
            <br />
            <br />
            당신의 안목은 항상 정확하죠! 그에 비해
            <br />
            <br />
            우리말 지식에는 조금 무관심했던 것 같아요~
            <br />
            <br />
            이제부터는 우리말 지식 정확도를 길러보도록 해요.
          </div>
        </div>
        <img className="char" src={andre} alt="캐릭터" />
      </div>
    </div>
  );
}

export default Andre;
