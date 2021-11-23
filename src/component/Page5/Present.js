import React from "react";
import PropTypes from "prop-types";
import "./Present.css";

const Present = ({ componentId }) => {
  return (
    <div className="present-outer-container" id={componentId}>
      <h1>🎁🎁🎁</h1>
    </div>
  );
};

export default Present;

Present.propTypes = {
  componentId: PropTypes.number.isRequired,
};
