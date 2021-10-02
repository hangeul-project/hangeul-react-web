import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import sejong from "./img/sejong_1.png";
import quizStartBackground from "./img/text_back.png";
import bg from "../Page4/img/bg.png";
import "../Page1/aos.css";
import "./Page3.css";
import QuizContainer from "./UI/QuizContainer";
import StartQuizButton from "./UI/StartQuizButton";
import HangeulQuizJson from "./hangeul-quiz.json";
import Page4 from "../Page4/component/Page4";

const Page3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const onStartClick = () => {
    setIsQuizVisible(!isQuizVisible);
  };
  const [isResultVisible, setIsResultVisible] = useState(false);

  return (
    <>
      <div className="outer-container-page3">
        <img src={bg} alt="bg" className="bg" />
        {/* NavBar -> 별도 컴포넌트로 분리하기 */}
        {/* <div className="navbar_container brackets">
        <a href="http://www.naver.com">내부바1</a>
        <a href="http://portal.hanyang.ac.kr">내부바2</a>
        <a href="http://www.google.com">내부바3</a>
      </div> */}
        <div className="challenge">나에 대해 맞춰보라굿!</div>
        <div className="content">
          <img src={sejong} alt="sejong" className="sejongimg" />
          <div className="quiz-outer-container">
            <QuizContainer
              quizItem={HangeulQuizJson}
              isVisible={isQuizVisible}
            />
            <div
              className={
                isQuizVisible
                  ? "quiz-start-background-hidden"
                  : "quiz-start-background"
              }
            >
              <img
                className="bg-container"
                src={quizStartBackground}
                alt="quiz-start-background"
              />
              <h3 className="quiz-start-title">
                한글날 기념 - 제 1회 - 천하제일 세종대회
              </h3>
              <StartQuizButton
                className="start-quiz-button"
                buttonText="퀴즈 시작!"
                onClickListener={onStartClick}
                isVisible={!isQuizVisible}
              />
            </div>
          </div>
        </div>
        <div>{isResultVisible ? <Page4 /> : null}; </div>
      </div>
    </>
  );
};

export default Page3;
