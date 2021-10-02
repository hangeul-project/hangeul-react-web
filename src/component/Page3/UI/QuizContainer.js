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

// eslint-disable-next-line
const QuizContainer = props => {
  const [solvedQuizCount, setSolvedQuizCount] = useState(0);
  const [quizContent, setQuizContent] = useState({
    questionArr: [],
    optionArr: [],
  });
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  const getQuizContent = () => {
    let answers = [];
    // eslint-disable-next-line
    props.quizItem.map(item => {
      // eslint-disable-next-line
      console.debug("=== loaded only once ? ===");
      // eslint-disable-next-line
      quizContent.questionArr.push(item.question);
      // eslint-disable-next-line
      item.options.map(answerItem => {
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
  // eslint-disable-next-line
  const onQuizFinished = event => {
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
        className={
          solvedQuizCount === 9
            ? "check-quiz-result-button"
            : "check-quiz-result-button hidden"
        }
        type="button"
        onClick={onQuizFinished}
      >
        결과 확인하기
      </button>
      <button
        className={
          solvedQuizCount === 9
            ? "check-quiz-result-button"
            : "check-quiz-result-button hidden"
        }
        type="button"
        onClick={() => props.onResultVisible}
      >
        결과 확인
      </button>
    </div>
  );
};

export default QuizContainer;
