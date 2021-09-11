import React from "react";
import "./QuizCountController.css";
import PropTypes from "prop-types";

const QuizCountController = ({
  solvedQuizCount,
  totalQuizCount,
  onIncrementClick,
  onDecrementClick,
}) => {
  return (
    <div className="count-controller center">
      <button
        className="control-button"
        type="button"
        onClick={onDecrementClick}
        disabled={solvedQuizCount <= 0}
      >
        이전 문제
      </button>
      <button
        className="control-button"
        type="button"
        onClick={onIncrementClick}
        disabled={solvedQuizCount === totalQuizCount - 1}
      >
        다음 문제
      </button>
    </div>
  );
};

QuizCountController.propTypes = {
  solvedQuizCount: PropTypes.number.isRequired,
  totalQuizCount: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
};

export default QuizCountController;
