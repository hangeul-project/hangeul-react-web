import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./QuizProgressBar.css";

const update = (progress) => {
  const innerBox = document.getElementById("dynamicProgressDiv");
  innerBox.style.width = `${progress * 10}%`;
};

const QuizProgressBar = ({ progress }) => {
  useEffect(() => {
    update(progress);
  }, [progress]);
  return (
    <div className="progress-bar-container">
      <p>Progress {progress}</p>
      <div className="progress-background-box">
        <div className="progress-inner-box" id="dynamicProgressDiv" />
      </div>
    </div>
  );
};

QuizProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default QuizProgressBar;
