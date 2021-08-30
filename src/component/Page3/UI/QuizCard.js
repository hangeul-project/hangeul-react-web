import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./QuizCard.css";

const QuizCard = ({ question, answerArray, currentQuizId, onAnswerClick }) => {
  return (
    <div className="quiz-card-outer-container" id={currentQuizId}>
      <h4>Question : {question}</h4>
      <br />
      <div>
        {answerArray.map((item, idx) => {
          return (
            <div key={item.answer} className="answer-item">
              {idx}. {item.answer}
              {item.isCorrect && <span> ❤️정답❤️</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

QuizCard.propTypes = {
  question: PropTypes.string.isRequired,
  answerArray: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
  currentQuizId: PropTypes.number.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
};

export default QuizCard;
