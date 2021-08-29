import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Q7 from "./Q7";
import "./Page3.css";

export default function Q6() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };
  return (
    <>
      <div className="Page3_text">
        <h1>6. 다음 중 올바른 표준어는? </h1>
        <input
          type="radio"
          id="공깃밥"
          checked={answer === "공깃밥"}
          onClick={() => onChangeAnswer("공깃밥")}
        />
        공깃밥
        <br />
        <input
          type="radio"
          id="순대국"
          checked={answer === "순대국"}
          onClick={() => onChangeAnswer("순대국")}
        />
        순대국
        <br />
        <input
          type="radio"
          id="쭈꾸미"
          checked={answer === "쭈꾸미"}
          onClick={() => onChangeAnswer("쭈꾸미")}
        />
        쭈꾸미
        <br />
        <input
          type="radio"
          id="고기집"
          checked={answer === "고기집"}
          onClick={() => onChangeAnswer("고기집")}
        />
        고기집
        <div>당신이 선택한 정답은 {answer} 입니다</div>
      </div>
      <div>
        <Router>
          <Link to="/Q7"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q7" component={Q7} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
