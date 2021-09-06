import React, { useEffect } from "react";
import AOS from "aos";
// import sejong from "./sejong.png";
import "../Page1/aos.css";
import "./Page3.css";
// import QuizContainer from "./UI/QuizContainer";
// import HangeulQuizJson from "./hangeul-quiz.json";

const Page3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="outer-container-page3">
      <div
        className="Sejong"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <span className="cele">한글날 기념</span>
      </div>
      <div
        className="Sejong"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <h1>제 1회 천하제일 세종대회</h1>
        <h3>단 10문제로 알아보는 세종대왕 인싸력 테스트</h3>
      </div>
      {/* <QuizContainer quizItem={HangeulQuizJson} /> */}
    </div>
  );
};

export default Page3;
