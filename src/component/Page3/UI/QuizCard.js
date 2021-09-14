import React from "react";
import PropTypes from "prop-types";
import "./QuizCard.css";
import AnswerButton from "./AnswerButton";
import * as Storage from "../../../database/LocalStorage";

const QuizCard = ({ question, answerArray, currentQuizId, onAnswerClick }) => {
  const userSelectedAnswer = () => {
    const selectedAnswerIdx = Storage.getUserSelectedAnswer(currentQuizId);
    console.log(`selected ${selectedAnswerIdx}`);
    return selectedAnswerIdx;
  };
  return (
    <div className="quiz-card-outer-container" id={currentQuizId}>
      <h4 className="quiz-question-text">Question : {question}</h4>
      {answerArray.map((item, idx) => {
        return (
          <AnswerButton
            key={item.answer}
            answerId={idx}
            answerText={`${item.answer}`}
            onSelectionChange={onAnswerClick}
            selectedAnswerIdx={userSelectedAnswer()}
          />
        );
      })}
    </div>
  );
};

QuizCard.propTypes = {
  question: PropTypes.string.isRequired,
  answerArray: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
  currentQuizId: PropTypes.number.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
};

export default QuizCard;
