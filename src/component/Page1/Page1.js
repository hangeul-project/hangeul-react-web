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
      <div id="outer-container-page1">
        <div
          className="greeting-hello"
          data-aos="fade-in"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          HELLO
        </div>
        <div
          className="greeting-xinchao"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2500"
          data-aos-delay="1000"
        >
          Xin chào
        </div>
        <div
          className="greeting-guten"
          data-aos="fade-in"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          data-aos-delay="1500"
        >
          Guten Tag
        </div>
        <div
          className="greeting-nihao"
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          你好
        </div>
        <div
          className="greeting-kor"
          data-aos="fade-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="2500"
        >
          안녕하세요
        </div>
        <div
          className="greeting-bonjour"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          data-aos-delay="2000"
        >
          Bonjour
        </div>
        <div
          className="greeting-hola"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2500"
          data-aos-delay="100"
        >
          ¡Hola
        </div>
        <div
          className="greeting-goni"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2500"
          data-aos-delay="1000"
        >
          こんにちは
        </div>
        <div
          className="greeting-sawa"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          สวัสดีครับ
        </div>
      </div>
    </>
  );
};

export default Page1;
