import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Q2 from "./Q2";
import "./Page3.css";

export default function Q1() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };

  return (
    <>
      <div>
        <div>
          <div className="Page3_text">
            <h1>세종대왕의 탄신일은 다음 국가 기념일의 날짜와 동일하다</h1>
            <div>
              <input
                type="radio"
                id="한글날"
                checked={answer === "한글날"}
                onClick={() => onChangeAnswer("한글날")}
              />
              한글날
              <br />
              <input
                type="radio"
                id="스승의 날"
                checked={answer === "스승의 날"}
                onClick={() => onChangeAnswer("스승의 날")}
              />
              스승의 날
              <br />
              <input
                type="radio"
                id="과학의 날"
                checked={answer === "과학의 날"}
                onClick={() => onChangeAnswer("과학의 날")}
              />
              과학의 날
              <br />
            </div>
            <div>당신이 선택한 정답은 {answer} 입니다</div>
          </div>
        </div>
      </div>
      <div>
        <Router>
          <Link to="/Q2"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q2" component={Q2} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
