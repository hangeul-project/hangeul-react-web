import React from "react";
import PropType from "prop-types";
import "./Introduction.css";

const Introduction = ({ profileImageUrl, introductionText, imagePosition }) => {
  return (
    <div className="introduction-outer-container">
      {imagePosition === 0 ? (
        <img
          className="introduction-image"
          src={profileImageUrl}
          alt="profile"
        />
      ) : (
        <img
          className="introduction-image"
          src={profileImageUrl}
          alt="profile"
        />
      )}
      <div className="introduction-text">{introductionText}</div>
    </div>
  );
};

Introduction.propTypes = {
  profileImageUrl: PropType.string.isRequired,
  introductionText: PropType.string.isRequired,
  imagePosition: PropType.number.isRequired, // 0 -> left, 1 -> right
};

export default Introduction;
