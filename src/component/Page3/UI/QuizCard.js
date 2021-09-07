import React from "react";
import PropTypes from "prop-types";
import "./QuizCard.css";
import AnswerButton from "./AnswerButton";

const QuizCard = ({
  question,
  answerArray,
  currentQuizId,
  onAnswerClick,
  hasBeenSolved,
}) => {
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
            hasBeenSolved={hasBeenSolved}
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
  hasBeenSolved: PropTypes.bool.isRequired,
};

export default QuizCard;
