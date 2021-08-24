import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Q9 from "./Q9";
import "./Page3.css";

export default function Q8() {
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e);
  };
  return (
    <>
      <div className="Page3_text">
        <h1>8. 다음 순우리말 중 뜻과 연결이 잘 못 된 단어는? </h1>
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        나비잠: 갓난아이가 두 팔을 위로 벌리고 자는 잠
        <br />
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        미쁘다: 믿음직스럽다
        <br />
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        도담도담: 어린아이가 무탈하게 잘 자란다
        <br />
        <input
          type="radio"
          id="1번"
          checked={answer === "1번"}
          onClick={() => onChangeAnswer("1번")}
        />
        미래내: 숲 속에 있는 작은 냇가
        <br />
        <div>당신이 선택한 정답은 {answer} 입니다</div>
      </div>
      <div>
        <Router>
          <Link to="/Q9"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q9" component={Q9} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
