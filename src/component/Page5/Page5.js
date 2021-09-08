import React from "react";
import * as DB from "../../database/database";
import "./Page5.css";

const onSuccess = (arr) => {
  console.log(arr);
};

const onFail = (error) => {
  console.error(error);
};
// This page is currently used only for testing firebase function !
const Page5 = () => {
  const onButtonClick = () => {
    DB.getAnswerRate(1, onSuccess, onFail);
  };
  return (
    <div className="outer-container-page5">
      <button onClick={onButtonClick} type="button" className="test-button">
        문제 오답률 확인
      </button>
    </div>
  );
};

export default Page5;
