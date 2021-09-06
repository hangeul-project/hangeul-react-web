import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./QuizProgressBar.css";

const update = (progress) => {
  const progressIndicator = document.getElementById("dynamic-progress-div");
  progressIndicator.style.width = `${progress * 10}%`;
};

const QuizProgressBar = ({ progress }) => {
  useEffect(() => {
    update(progress);
  }, [progress]);
  return (
    <div className="progress-bar-container">
      <p>Progress {progress}</p>
      <div className="progress-background-box">
        <div className="progress-inner-box" id="dynamic-progress-div" />
      </div>
    </div>
  );
};

QuizProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default QuizProgressBar;
