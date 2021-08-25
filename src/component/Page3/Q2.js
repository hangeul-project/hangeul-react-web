import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Q3 from "./Q3";
import "./Page3.css";

export default function Q2() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };
  return (
    <>
      <div>
        <div className="Page3_text">
          <h1>2. 대한민국의 한자와 한글의 한자는 동일한 한자를 사용한다</h1>
          <input
            type="radio"
            id="O"
            checked={answer === "O"}
            onClick={() => onChangeAnswer("O")}
          />
          O
          <br />
          <input
            type="radio"
            id="O"
            checked={answer === "X"}
            onClick={() => onChangeAnswer("X")}
          />
          X
          <br />
          <div>당신이 선택한 정답은 {answer} 입니다</div>
        </div>
        <div>
          <Router>
            <Link to="/Q3"> 다음 문제 </Link>
            <Switch>
              <Route path="/Q3" component={Q3} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}
