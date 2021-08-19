import React, { Component } from "react";
import "../page4.css";
import charA from "./img.png";

class Page4 extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="you">당신은...</div>
          <img
            className="char"
            src={charA}
            width="400"
            height="550"
            alt="캐릭터"
          />
          <div className="you__char">
            <div className="description">
              당신은 한글나라의 <br /> 최고 인기아이돌 김씨소년단입니다!
            </div>
          </div>
          <span className="char__name">도도한 김씨소년단</span>
          <div className="choice">
            <button className="choice__first">끝내겠소</button>
            <button className="choice__second">기부하겠소</button>
            <button className="choice__third">공유하겠소</button>
          </div>
        </div>
      </>
    );
  }
}

export default Page4;
