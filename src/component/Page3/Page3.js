import React, { useEffect } from "react";
import AOS from "aos";
import sejong from "./img/sejong_1.png";
import textback from "./img/text_back.png";
import bg from "../Page4/img/bg.png";
import "../Page1/aos.css";
import "./Page3.css";
import QuizContainer from "./UI/QuizContainer";
import HangeulQuizJson from "./hangeul-quiz.json";

const Page3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
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
        {/* TODO: 퀴즈 컨테이너 완성 후 Rollback -> 족자안으로 넣는 작업하기 */}
        {/* <img src={textback} alt="textback" className="text_back" /> */}
        <QuizContainer quizItem={HangeulQuizJson} className="quiz" />
      </div>
    </div>
  );
};

export default Page3;
