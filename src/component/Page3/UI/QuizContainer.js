/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import QuizCard from "./QuizCard";
import QuizProgressBar from "./QuizProgressBar";
import QuizCountController from "./QuizCountController";
import "./QuizContainer.css";

export const TOTAL_QUIZ_NUM = 10;

const QuizContainer = (props) => {
  const [solvedQuizCount, setSolvedQuizCount] = useState(0);

  const onIncrementClick = () => {
    if (solvedQuizCount < TOTAL_QUIZ_NUM) {
      setSolvedQuizCount(solvedQuizCount + 1);
    }
  };

  const onDecrementClick = () => {
    if (solvedQuizCount > 0) {
      setSolvedQuizCount(solvedQuizCount - 1);
    }
  };

  let currentQuizId = -1;
  const questionArr = [];
  const optionArr = [];
  let answers = [];
  props.quizItem.map((item) => {
    currentQuizId = item.id;
    questionArr.push(item.question);
    item.options.map((answerItem) => {
      answers.push(answerItem);
      return null;
    });
    optionArr.push(answers);
    answers = [];
    return null;
  });

  return (
    <div className="quiz-container-outer">
      <QuizProgressBar progress={solvedQuizCount + 1} />
      <QuizCard
        question={questionArr[solvedQuizCount]}
        answerArray={optionArr[solvedQuizCount]}
        currentQuizId={currentQuizId}
      />
      <QuizCountController
        onIncrementClick={onIncrementClick}
        onDecrementClick={onDecrementClick}
        solvedQuizCount={solvedQuizCount}
        totalQuizCount={TOTAL_QUIZ_NUM}
      />
    </div>
  );
};

export default QuizContainer;
