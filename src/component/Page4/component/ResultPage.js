import React from "react";
import "../css/Page4.css";
import getQuestionToAnswerMap from "../../../database/QuizService";
import { getUserSelectedAnswer } from "../../../database/LocalStorage";
import ResultArray from "./ResultArray";
import textback from "../img/text_back_line2.png";

const CountAnswer = () => {
  let count = 0;
  const questionAnswer = getQuestionToAnswerMap();

  for (let i = 0; i < 10; i += 1) {
    const userAnswer = getUserSelectedAnswer(`question${i}`);
    if (questionAnswer.get(i + 1) === userAnswer[i]) {
      count += 1;
    } //  Count how many quizes the user correctly answered
  }
  return count;
};

const Decide = () => {
  const count = CountAnswer();
  const arr = ResultArray();
  let resultValue = [];
  if (count < 1) {
    resultValue = [arr[0][0], arr[0][1]]; // get the result character and description
  } else if (count < 5) {
    resultValue = [arr[1][0], arr[1][1]];
  } else if (count < 7) {
    resultValue = [arr[2][0], arr[2][1]];
  } else if (count < 10) {
    resultValue = [arr[3][0], arr[3][1]];
  } else {
    resultValue = [arr[4][0], arr[4][1]];
  }
  return resultValue; // make this as an array and return it
};

const ResultPage = () => {
  const resultValue = Decide();
  return (
    <div className="result_page">
      <button onClick={Decide} type="button" className="test-button">
        결과지 확인
      </button>
      {/* the result page is loaded when this button is clicked  */}
      <div className="container">
        <img className="textback" src={textback} alt="textback" />
        <div className="your">
          <div className="youris">{resultValue[0]}</div>
          <div className="description">{resultValue[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
