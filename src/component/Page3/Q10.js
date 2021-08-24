import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Page3.css";

export default function Q10() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };

  return (
    <>
      <div className="Page3_text">
        <h1>
          10. 신문의 날인 4월 7일은 이 신문의 창간일로, 이 신문은 우리나라
          최초의 한글신문이었다. 주시경이 국문판 편집과 제작을 담당하였던 이
          신문은 어느 신문인가?
        </h1>
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        한성순보
        <br />
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        독립신문
        <br />
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        대한매일순보
        <br />
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        황성신문
        <br />
        <div>당신이 선택한 정답은 {answer} 입니다</div>
      </div>
      <div>
        <Router>
          <Link to="Page4"> 결과지 보기 </Link>
          <Switch>
            <Route path="/Page4" />
          </Switch>
        </Router>
      </div>
    </>
  );
}
