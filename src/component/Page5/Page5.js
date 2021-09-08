import React, { useState } from "react";
import * as DB from "../../database/database";
import "./Page5.css";

// This page is currently used only for testing firebase function !
const Page5 = () => {
  const answerRateArrayHelper = [];
  const [answerRates, setAnswerRates] = useState(null);

  const onSuccess = (arr) => {
    console.log(arr);
    // 서버에서 받아온 각 문제에 대한 정답률을 또 다시 배열에 저장한다.
    answerRateArrayHelper.push(arr);
    if (answerRateArrayHelper.length === 10) {
      setAnswerRates(answerRateArrayHelper);
    }
  };

  const onFail = (error) => {
    console.error(error);
  };

  const onButtonClick = () => {
    for (let index = 0; index < 10; index += 1) {
      // 문제의 아이디값은 1 .. 10 까지 이므로 index + 1
      DB.getAnswerRate(index + 1, onSuccess, onFail);
    }
  };
  return (
    <div className="outer-container-page5">
      <button onClick={onButtonClick} type="button" className="test-button">
        문제 오답률 확인
      </button>
      {answerRates &&
        answerRates.map((arr, idx) => {
          return (
            <div className="test-text">
              {idx + 1}번 문제 정답률 :
              <div>
                {arr.map((rate, idx2) => (
                  <p className="test-text-2">
                    {idx2 + 1} 번 선택지 : {rate}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Page5;
