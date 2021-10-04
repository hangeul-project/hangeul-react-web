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
      <div className=".container">
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
    </div>
  );
}
