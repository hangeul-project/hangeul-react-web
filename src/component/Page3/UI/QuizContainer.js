/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import QuizProgressBar from "./QuizProgressBar";
import QuizCountController from "./QuizCountController";
import "./QuizContainer.css";
import * as DB from "../../../database/database";
import * as Storage from "../../../database/LocalStorage";

export const TOTAL_QUIZ_NUM = 10;
const userSelectedAnswerMap = new Map();

const QuizContainer = (props) => {
  const [solvedQuizCount, setSolvedQuizCount] = useState(0);
  const [quizContent, setQuizContent] = useState({
    questionArr: [],
    optionArr: [],
  });
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const getQuizContent = () => {
    let answers = [];
    props.quizItem.map((item) => {
      // eslint-disable-next-line
      console.debug("=== loaded only once ? ===");
      quizContent.questionArr.push(item.question);
      item.options.map((answerItem) => {
        answers.push(answerItem);
        return null;
      });
      quizContent.optionArr.push(answers);
      answers = [];
      return null;
    });
    setQuizContent({
      questionArr: quizContent.questionArr,
      optionArr: quizContent.optionArr,
    });
    setIsContentLoaded(true);
  };

  // make sure to parse quiz json text only once!
  useEffect(() => {
    getQuizContent();
  }, [userSelectedAnswerMap]);

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

  const onAnswerClick = (event, selectedAnswerId) => {
    userSelectedAnswerMap.set(solvedQuizCount + 1, selectedAnswerId);
    // 사용자가 몇 번을 정답으로 선택했는지에 대해서 local storage 에 저장한다.
    Storage.saveUserSelectedAnswer(solvedQuizCount + 1, selectedAnswerId);
  };

  const onQuizFinished = (event) => {
    // eslint-disable-next-line
    console.debug(userSelectedAnswerMap);
    userSelectedAnswerMap.forEach((value, key) => {
      DB.updateChosenAnswer(key, value);
    });
  };

  return (
    // Toggles visibility of quiz container
    <div
      className={
        props.isVisible
          ? "quiz-container-outer"
          : "quiz-hidden quiz-container-outer"
      }
    >
      <QuizProgressBar progress={solvedQuizCount + 1} />

      {isContentLoaded && (
        <QuizCard
          question={quizContent.questionArr[solvedQuizCount]}
          answerArray={quizContent.optionArr[solvedQuizCount]}
          currentQuizId={solvedQuizCount + 1}
          onAnswerClick={onAnswerClick}
        />
      )}

      <QuizCountController
        onIncrementClick={onIncrementClick}
        onDecrementClick={onDecrementClick}
        solvedQuizCount={solvedQuizCount}
        totalQuizCount={TOTAL_QUIZ_NUM}
      />

      <button
        className="check-quiz-result-button"
        type="button"
        onClick={onQuizFinished}
      >
        결과 확인하기
      </button>
    </div>
  );
};

export default QuizContainer;
