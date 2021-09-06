import React, { useEffect } from "react";
import AOS from "aos";
import "./aos.css";
import "./Page1.css";

const Page1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="outer-container">
      <div
        className="greeting__first"
        data-aos="fade-in"
        data-aos-offset="5"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        <span className="greeting__hello">HELLO</span>
        <span className="greeting__xinchao">Xin chào</span>
      </div>
      <div
        className="greeting__second"
        data-aos="fade-in"
        data-aos-offset="5"
        data-aos-easing="ease-in-sine"
        data-aos-duration="6000"
      >
        <div className="greeting__gutentag">Guten Tag</div>
      </div>
      <div
        className="greeting__third"
        data-aos="fade-in"
        data-aos-offset="5"
        data-aos-easing="ease-in-sine"
        data-aos-duration="3000"
      >
        <span className="greeting__hi">你好</span>
      </div>
      <div
        className="greeting__last"
        data-aos="fade-in"
        data-aos-offset="5"
        data-aos-easing="ease-in-sine"
        data-aos-delay="2500"
      >
        <span className="greeting__korean">안녕하세요</span>
      </div>
      <div
        className="greeting__third"
        data-aos="fade-in"
        data-aos-offset="5"
        data-aos-easing="ease-in-sine"
        data-aos-duration="90000"
      >
        <span className="greeting__bonjour">Bonjour</span>
      </div>
      <div
        className="greeting__fourth"
        data-aos="fade-in"
        data-aos-offset="5"
        data-aos-easing="ease-in-sine"
        data-aos-duration="8000"
      >
        <div className="greeting__hola page1-button">¡Hola</div>
        <div className="greeting__goni page1-button">こんにちは</div>
      </div>
      <div
        className="greeting__fifth"
        data-aos="fade-in"
        data-aos-offset="5"
        data-aos-easing="ease-in-sine"
        data-aos-duration="4000"
      >
        <div className="greeting__sawa page1-button">สวัสดีครับ</div>
      </div>
      <div
        data-aos="fade-in"
        data-aos-offset="5"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        <button type="button" className="page1-button">
          다음으로
        </button>
      </div>
    </div>
  );
};

export default Page1;
