import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/Page4.css";
import getQuestionToAnswerMap from "../../../database/QuizService";
import { getUserSelectedAnswer } from "../../../database/LocalStorage";
import Idol from "./idol/Idol";
import Jumo from "./jumo/Jumo";
import Hakja from "./hakja/Hakja";
import Andre from "./andre/Andre";

//  This component decide what resultpage will be shown to the user based on the user's answer rate.

const Results = () => {
  let count = 0;
  const questionAnswer = getQuestionToAnswerMap();

  for (let i = 0; i < 10; i += 1) {
    const userAnswer = getUserSelectedAnswer(`question${i}`);
    if (questionAnswer.get(i + 1) === userAnswer[i]) {
      count += 1;
    } //  Count how many quizes the user correctly answered
  }
  if (count < 1) {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Jumo" component={Jumo} />
            <Link to="/Jumo"> 당신의 결과는 ?! </Link>
          </Switch>
        </Router>
      </div>
    );
  }
  if (count >= 1 && count < 5) {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Andre" component={Andre} />
            <Link to="/Andre"> 당신의 결과는 ?! </Link>
          </Switch>
        </Router>
      </div>
    );
  }
  if (count >= 5 && count < 7) {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Idol" component={Idol} />
            <Link to="/Idol"> 당신의 결과는 ?! </Link>
          </Switch>
        </Router>
      </div>
    );
  }
  if (count >= 7 && count < 10) {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Hakja" component={Hakja} />
            <Link to="/Hakja"> 당신의 결과는 ?! </Link>
          </Switch>
        </Router>
      </div>
    );
  }
  return null;
};

export default Results;
