import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Q5 from "./Q5";
import "./Page3.css";

export default function Q4() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };
  return (
    <>
      <div className="Page3_text">
        <h1>4. 한글의 로마자 표기법은 ㅁ, 영어로는 ㅇ이다. </h1>
        <input
          type="radio"
          id="option1"
          checked={answer === "option1"}
          onClick={() => onChangeAnswer("1번")}
        />
        ㅁ = Hangul ㅇ = Hangul
        <br />
        <input
          type="radio"
          id="option2"
          checked={answer === "2번"}
          onClick={() => onChangeAnswer("2번")}
        />
        ㅁ = Hangul ㅇ = Hangeul
        <br />
        <input
          type="radio"
          id="option3"
          checked={answer === "3번"}
          onClick={() => onChangeAnswer("3번")}
        />
        ㅁ = Hangeul ㅇ = Hangul
        <br />
        <input
          type="radio"
          id="option4"
          checked={answer === "4번"}
          onClick={() => onChangeAnswer("4번")}
        />
        ㅁ = Hangul ㅇ = Hangeul
        <br />
        <div>당신이 선택한 정답은 {answer} 입니다</div>
      </div>
      <div>
        <Router>
          <Link to="/Q5"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q5" component={Q5} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
