import React, { useEffect } from "react";
import AOS from "aos";
import sejong from "./img/sejong_1.png";
import textback from "./img/text_back.png";
import "../Page1/aos.css";
import "./Page3.css";
import QuizContainer from "./UI/QuizContainer";
import HangeulQuizJson from "./hangeul-quiz.json";

const Page3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="navbar_container brackets">
        <a href="http://www.naver.com">내부바1</a>
        <a href="http://portal.hanyang.ac.kr">내부바2</a>
        <a href="http://www.google.com">내부바3</a>
      </div>
      <div className="outer-container-page3">
        <div className="challenge">나에 대해 맞춰보라굿!</div>
        <div className="sejong">
          <img src={sejong} alt="sejong" className="sejongimg" />
          <img src={textback} alt="textback" className="text_back" />
          <div className="text__container">
            <div className="text1">제 1회 천하제일세종대회</div>
            <div className="text2">
              단 10문제로 알아보는 세종대왕 인싸력 테스트
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
