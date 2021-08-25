import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Q8 from "./Q8";
import "./Page3.css";

export default function Q7() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };
  return (
    <>
      <div className="Page3_text">
        <h1>7. 다음 중 맞춤법이 올바른 문장은? </h1>
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        난 지금 너무 배고파서 눈에 봬는 게 없다
        <br />
        <input
          type="radio"
          id="2번"
          checked={answer === "2번"}
          onClick={() => onChangeAnswer("2번")}
        />
        오늘은 웬지 놀고 싶다
        <br />
        <input
          type="radio"
          id="3번"
          checked={answer === "3번"}
          onClick={() => onChangeAnswer("3번")}
        />
        이번엔 네가 꼭 이기길 바라
        <br />
        <input
          type="radio"
          id="4번"
          checked={answer === "4번"}
          onClick={() => onChangeAnswer("4번")}
        />
        네가 그러던 말던 상관 안 한다
        <div>당신이 선택한 정답은 {answer} 입니다</div>
      </div>
      <div>
        <Router>
          <Link to="/Q8"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q8" component={Q8} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
