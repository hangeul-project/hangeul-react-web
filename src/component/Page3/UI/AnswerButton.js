import React, { useState } from "react";
import "./AnswerButton.css";
import PropTypes from "prop-types";

const AnswerButton = ({
  answerId,
  answerText,
  onSelectionChange,
  selectedAnswerIdx,
}) => {
  // console.log(`${answerId} / ${hasBeenSolved} / ${answerText}`);
  // console.log(`${answerId === hasBeenSolved}`);
  return (
    // 'htmlFor' attribute in <label> tag is causing issue, deleted on purpose.
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label id={answerId} className="answer-button-label">
      {selectedAnswerIdx !== -1 ? (
        <input
          type="radio"
          onChange={(event) => onSelectionChange(event, answerId)}
          name="radio-group"
          id={answerId}
          className="answer-input"
          value={answerText}
          checked={answerId === selectedAnswerIdx}
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
  selectedAnswerIdx: PropTypes.number.isRequired,
};

export default AnswerButton;
