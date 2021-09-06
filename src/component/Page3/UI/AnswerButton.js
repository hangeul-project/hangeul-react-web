import React from "react";
import "./AnswerButton.css";
import PropTypes from "prop-types";

// FIXME : This component has a bug!
// if one selects an answer in quiz number2, the radio button
// keeps the checked state of it self even in quiz number 3.
const AnswerButton = ({ answerId, answerText, onSelectionChange }) => {
  return (
    <div className="answer-button-container">
      <input
        type="radio"
        onChange={(event) => onSelectionChange(event, answerId)}
        name="radio-group"
        id={answerId}
        className="answer-input"
        value={answerText}
        // checked={hasBeenSolved} FIXME : I have to figure out how to toggle this checked state!
      />
      <label htmlFor="answer-text" id={answerId}>
        {answerText}
      </label>
    </div>
  );
};

AnswerButton.propTypes = {
  answerId: PropTypes.number.isRequired,
  answerText: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default AnswerButton;
