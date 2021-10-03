import React from "react";
import PropTypes from "prop-types";
import "./ExplainCard.css";

const ExplainCard = ({ quizItem }) => {
  return (
    <div className="explain-card-container">
      <h4>{quizItem.id}</h4>
      <p>{quizItem.question}</p>
      <p>{quizItem.explanation}</p>
    </div>
  );
};

ExplainCard.propTypes = {
  quizItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExplainCard;
