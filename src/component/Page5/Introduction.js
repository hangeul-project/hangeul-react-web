import React from "react";
import PropType from "prop-types";
import "./Introduction.css";

// 소개 이미지와 텍스트 박스
// imagePosition prop 에 0을 넣어주면 사진이 텍스트의 왼쪽에 배치되고, 1을 넣어주면 오른쪽으로 배치된다.
const Introduction = ({ profileImageUrl, introductionText, imagePosition }) => {
  return (
    <div className="introduction-outer-container">
      {imagePosition === 0 ? (
        <>
          <img
            className="introduction-image"
            src={profileImageUrl}
            alt="profile"
          />
          <div className="introduction-text">{introductionText}</div>
        </>
      ) : (
        <>
          <div className="introduction-text">{introductionText}</div>
          <img
            className="introduction-image"
            src={profileImageUrl}
            alt="profile"
          />
        </>
      )}
    </div>
  );
};

Introduction.propTypes = {
  profileImageUrl: PropType.string.isRequired,
  introductionText: PropType.string.isRequired,
  imagePosition: PropType.number.isRequired, // 0 -> left, 1 -> right
};

export default Introduction;
