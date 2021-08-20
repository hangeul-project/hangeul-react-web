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
    <>
      <div>
        <div
          className="greeting__first"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
        >
          <span className="greeting__hello">HELLO</span>
          <span className="greeting__xinchao">Xin chào</span>
        </div>
        <div
          className="greeting__second"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <div className="greeting__gutentag">Guten Tag</div>
        </div>
        <div
          className="greeting__third"
          data-aos="fade-in"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2500"
        >
          <span className="greeting__hi">你好</span>
          <p className="greeting__korean">안녕하세요</p>
          <span className="greeting__bonjour">Bonjour</span>
        </div>
        <div
          className="greeting__fourth"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="750"
        >
          <div className="greeting__hola">¡Hola</div>
          <div className="greeting__goni">こんにちは</div>
        </div>
        <div
          className="greeting__fifth"
          data-aos="fade-in"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
        >
          <div className="greeting__sawa">สวัสดีครับ</div>
        </div>
      </div>
    </>
  );
};

export default Page1;
