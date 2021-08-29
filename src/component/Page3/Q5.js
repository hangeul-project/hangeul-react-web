import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Q6 from "./Q6";
import "./Page3.css";

export default function Q5() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };
  return (
    <>
      <div className="Page3_text">
        <h1>5. 다음 과일 중 순우리말인 것은? </h1>
        <input
          type="radio"
          id="option1"
          checked={answer === "수박"}
          onClick={() => onChangeAnswer("수박")}
        />
        수박
        <br />
        <input
          type="radio"
          id="귤"
          checked={answer === "귤"}
          onClick={() => onChangeAnswer("귤")}
        />
        귤
        <br />
        <input
          type="radio"
          id="사과"
          checked={answer === "사과"}
          onClick={() => onChangeAnswer("사과")}
        />
        사과
        <br />
        <input
          type="radio"
          id="석류"
          checked={answer === "석류"}
          onClick={() => onChangeAnswer("석류")}
        />
        석류
        <br />
        <div>당신이 선택한 정답은 {answer} 입니다</div>
      </div>
      <div>
        <Router>
          <Link to="/Q6"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q6" component={Q6} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
