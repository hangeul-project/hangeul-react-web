import React from "react";
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
    return <Jumo />;
  }
  if (count < 5) {
    return <Andre />;
  }
  if (count < 7) {
    return <Idol />;
  }
  if (count < 10) {
    return <Hakja />;
  }
  return null;
};

export default Results;
