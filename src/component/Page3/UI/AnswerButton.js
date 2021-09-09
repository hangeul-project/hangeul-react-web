import React, { useState } from "react";
import "./AnswerButton.css";
import PropTypes from "prop-types";

// FIXME : This component has a bug!
// if one selects an answer in quiz number2, the radio button
// keeps the checked state of it self even in quiz number 3.

const AnswerButton = ({
  answerId,
  answerText,
  onSelectionChange,
  hasBeenSolved,
}) => {
  console.log(`${answerId} / ${hasBeenSolved} / ${answerText}`);
  console.log(`${answerId === hasBeenSolved}`);
  return (
    // 'htmlFor' attribute in <label> tag is causing issue, deleted on purpose.
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label id={answerId} className="answer-button-label">
      {hasBeenSolved !== -1 ? (
        <input
          type="radio"
          onChange={(event) => onSelectionChange(event, answerId)}
          name="radio-group"
          id={answerId}
          className="answer-input"
          value={answerText}
          checked={answerId === hasBeenSolved}
        />
      ) : (
        <input
          type="radio"
          onChange={(event) => onSelectionChange(event, answerId)}
          name="radio-group"
          id={answerId}
          className="answer-input"
          value={answerText}
        />
      )}
      {answerText}
    </label>
  );
};

AnswerButton.propTypes = {
  answerId: PropTypes.number.isRequired,
  answerText: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  hasBeenSolved: PropTypes.number.isRequired,
};

export default AnswerButton;
