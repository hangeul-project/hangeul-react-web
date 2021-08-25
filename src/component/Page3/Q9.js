import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Q10 from "./Q10";
import "./Page3.css";

export default function Q9() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };

  return (
    <>
      <div className="Page3_text">
        <h1>9. 다음 띄어쓰기가 올바르지 않은 문장은? </h1>
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        현수는 칠칠 맞지 못하게 준비물을 빠뜨렸다.
        <br />
        <input
          type="radio"
          id="2번"
          checked={answer === "2번"}
          onClick={() => onChangeAnswer("2번")}
        />
        장학금은커녕 낙제만 안 하면 다행이다.
        <br />
        <input
          type="radio"
          id="3번"
          checked={answer === "3번"}
          onClick={() => onChangeAnswer("3번")}
        />
        야채는 그만큼이면 충분하다.
        <br />
        <input
          type="radio"
          id="4번"
          checked={answer === "4번"}
          onClick={() => onChangeAnswer("4번")}
        />
        이 일은 나와 너밖에 모른다.
        <br />
        <div>당신이 선택한 정답은 {answer} 입니다</div>
      </div>
      <div>
        <Router>
          <Link to="/Q10"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q10" component={Q10} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
