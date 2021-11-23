import React from "react";
import PropTypes from "prop-types";
import "./ExplainCard.css";
import getQuestionToAnswerMap from "../../database/QuizService";

const ExplainCard = ({ quizItem, answerRateArr }) => {
  const questionToAnswerIdxMap = getQuestionToAnswerMap();

  const isAnswer = (questionId, answerIdx) =>
    questionToAnswerIdxMap.get(questionId) === answerIdx;

  return (
    <div className="explain-card-container">
      <h3>
        Q{quizItem.id}. {quizItem.question}
      </h3>
      <div>
        {answerRateArr.map((rate, answerIdx) => {
          return (
            <p className="answer-text">
              {/* 올림 처리해서 퍼센트 보여주기 */}A{answerIdx + 1}.
              {quizItem.options[answerIdx].answer}
              <br />
              <span className="answer-rate">
                {Math.ceil(rate * 100)}%
                {isAnswer(quizItem.id, answerIdx) ? "🙆‍♀️" : "🤦"}{" "}
              </span>
            </p>
          );
        })}
      </div>
      <p className="explanation-text">{quizItem.explanation}</p>
    </div>
  );
};

ExplainCard.propTypes = {
  quizItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.shape({
      answer: PropTypes.string.isRequired,
    }),
    explanation: PropTypes.string.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  answerRateArr: PropTypes.array.isRequired,
};

export default ExplainCard;
