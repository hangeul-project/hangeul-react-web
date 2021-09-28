import React from "react";
import "../css/Page4.css";
import getQuestionToAnswerMap from "../../../database/QuizService";
import { getUserSelectedAnswer } from "../../../database/LocalStorage";
import textback from "../img/text_back_line2.png";
import ResultJson from "./ResultPage.json";

export default function ResultPage() {
  let count = 0;
  let num = 0;
  const questionAnswer = getQuestionToAnswerMap();

  for (let i = 0; i < 10; i += 1) {
    const userAnswer = getUserSelectedAnswer(`question${i}`);
    if (questionAnswer.get(i + 1) === userAnswer[i]) {
      count += 1;
    } //  Count how many quizes the user correctly answered
  }
  if (count < 1) {
    num = 0; // get the result character and description
  } else if (count < 5) {
    num = 1;
  } else if (count < 7) {
    num = 2;
  } else if (count < 10) {
    num = 3;
  } else {
    num = 4;
  }

  ResultJson.map((result, index) => {
    if (result.id === num) {
      const character = result.character;
      const description = result.description;
    }
    return null;
  });

  return (
    <div className="result_page">
      <button onClick={} type="button" className="test-button">
        결과지 확인
      </button>
      {/* the result page is loaded when this button is clicked  */}
      <div className="container">
        <img className="textback" src={textback} alt="textback" />
        <div className="your">
          <div className="youris">당신은 {character}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
}
