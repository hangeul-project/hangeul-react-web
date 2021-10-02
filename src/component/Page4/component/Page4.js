import React from "react";
import "../css/Page4.css";
import Page5 from "../../Page5/Page5";
import Results from "./ResultPage";

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

export default function Page4() {
  return (
    <div className="outer-container-page4">
      {/* NavBar 따로 컴포넌트로 분리하기 */}
      {/* <div className="navbar__container brackets">
        <a href="http://www.naver.com">내부바1</a>
        <a href="http://portal.hanyang.ac.kr">내부바2</a>
        <a href="http://www.google.com">내부바3</a>
      </div> */}
      <div>
        <Results />
      </div>
      <div>
        <ChoiceBtn />
      </div>
      <div>
        <Page5 />
      </div>
    </div>
  );
}
