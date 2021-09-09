import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./aos.css";
import "./Page1.css";
import Page2 from "../Page2/Page2";

const Page1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <div className="outer-container-page1">
        <div
          className="greeting-hello"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          HELLO
        </div>
        <div
          className="greeting-xinchao"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          Xin chào
        </div>
        <div
          className="greeting-guten"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          Guten Tag
        </div>
        <div
          className="greeting-nihao"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          你好
        </div>
        <div
          className="greeting-kor"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          안녕하세요
        </div>
        <div
          className="greeting-bonjour"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          Bonjour
        </div>
        <div
          className="greeting-hola"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          ¡Hola
        </div>
        <div
          className="greeting-goni"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          こんにちは
        </div>
        <div
          className="greeting-sawa"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          สวัสดีครับ
        </div>
      </div>
    </>
  );
};

export default Page1;
