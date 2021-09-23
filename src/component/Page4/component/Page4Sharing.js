import React from "react";
import "../css/Page4Sharing.css";
import charA from "../img/img.png";

export default function Page4Sharing() {
  return (
    <>
      <div className="container">
        <div className="youris">당신은...</div>
        <div className="content__left">
          <div className="content">
            <img
              className="char"
              src={charA}
              width="400"
              height="auto"
              alt="캐릭터"
            />
            <div className="name">한글나라 아이돌 김씨소년단</div>
          </div>
          <div className="content__right">
            <div className="where">어디로 공유하시겠소?</div>
            <div className="btn__social">
              <button type="button">카카오톡</button>
              <button type="button">페이스북</button>
              <button type="button">트위터</button>
              <button type="button">인스타그램</button>
            </div>
            <div className="btn">
              <button type="button">끝내겠소</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
