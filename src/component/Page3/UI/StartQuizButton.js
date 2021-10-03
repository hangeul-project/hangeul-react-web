import React from "react";
import PropTypes from "prop-types";
import "./StartQuizButton.css";

const StartQuizButton = ({ buttonText, onClickListener, isVisible }) => {
  return (
    // Visibility toggle. Once quiz is started, 'Quiz start' button should not be visible.
    // (or at least change its text to 'End Quiz')
    <button
      className={isVisible ? "start-quiz-button" : "start-quiz-button-hidden"}
      type="button"
      onClick={onClickListener}
    >
      {buttonText}
    </button>
  );
};

StartQuizButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClickListener: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default StartQuizButton;
