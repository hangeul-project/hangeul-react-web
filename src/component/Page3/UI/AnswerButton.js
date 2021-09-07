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
  return (
    // 'htmlFor' attribute in <label> tag is causing issue, deleted on purpose.
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label id={answerId} className="answer-button-label">
      <input
        type="radio"
        onChange={(event) => onSelectionChange(event, answerId)}
        name="radio-group"
        id={answerId}
        className="answer-input"
        value={answerText}
        // checked={hasBeenSolved} FIXME : I have to figure out how to toggle this checked state!
      />
      {answerText}
    </label>
  );
};

AnswerButton.propTypes = {
  answerId: PropTypes.number.isRequired,
  answerText: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  hasBeenSolved: PropTypes.bool.isRequired,
};

export default AnswerButton;
