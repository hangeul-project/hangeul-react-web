import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import ExplainCard from "./ExplainCard";
import QuizList from "../Page3/hangeul-quiz.json";
import "./Explanation.css";
import * as DB from "../../database/database";

const Explanation = ({ componentId }) => {
  const answerRateArrayHelper = [];
  const [answerRates, setAnswerRates] = useState(null);

  // 서버에서 정답률에 대한 정보를 받아오는게 성공하면 실행되는 함수
  const onSuccess = (arr) => {
    console.log(arr);
    // 서버에서 받아온 각 문제에 대한 정답률을 또 다시 배열에 저장한다.
    answerRateArrayHelper.push(arr);
    if (answerRateArrayHelper.length === 10) {
      // 10 문제에 대한 정보를 모두 받아온 후 setState 를 호출
      setAnswerRates(answerRateArrayHelper);
    }
  };

  // 서버에서 정답률에 대한 정보를 받아오는게 실패하면 실행되는 함수
  const onFail = (error) => {
    console.error(error);
  };

  useEffect(() => {
    for (let index = 0; index < 10; index += 1) {
      // 문제의 아이디값은 1 .. 10 까지 이므로 index + 1
      DB.getAnswerRate(index + 1, onSuccess, onFail);
    }
  }, []);

  return (
    <div className="explanation-outer-container" id={componentId}>
      <div className="explain-card-area">
        <ul>
          {answerRates &&
            answerRates.map((individualAnswerRateArr, questionIdx) => {
              const curQuiz = QuizList[questionIdx];
              return (
                <li>
                  <ExplainCard
                    quizItem={curQuiz}
                    answerRateArr={individualAnswerRateArr}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

Explanation.propTypes = {
  componentId: PropType.number.isRequired,
};

export default Explanation;
