import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Q4 from "./Q4";
import "./Page3.css";

export default function Q3() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };

  return (
    <>
      <div className="Page3_text">
        <h1>3. 한글은 모든 소리를 표현하지 못한다. </h1>
        <div>
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
            id="X"
            checked={answer === "X"}
            onClick={() => onChangeAnswer("X")}
          />
          X
          <br />
          <div>당신이 선택한 정답은 {answer} 입니다</div>
        </div>
      </div>
      <div>
        <Router>
          <Link to="/Q4"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q4" component={Q4} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
