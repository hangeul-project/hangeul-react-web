import React, { useEffect } from "react";
import AOS from "aos";
import "./Page2.css";
import "../Page1/aos.css";
import jjum from "./pg2_img/jjum.png";
import gamagi from "./pg2_img/gamagi.png";

export default function Page2() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="Page2_text">
        <br />
        <br />
        <div
          className="Page2_line1"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-delay="100"
        >
          <br />
          나랏말싸미듕긱에달아
        </div>
        <br />
        <br />
        <div className="Page2_together">
          <div
            className="Page2_line2"
            data-aos="fade-in"
            data-aos-offset="5"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1000"
          >
            <span>문자와서로사맛디</span>
            <span>아니할세</span>
            <br />
            <br />
          </div>
          <br />
          <br />
          <div
            data-aos="fade-in"
            data-aos-offset="5"
            data-aos-easing="ease-in-sine"
            data-aos-delay="2000"
          >
            <img className="jjum" src={jjum} alt="jjum" width="70px" />
            <br />
            <br />
            <img className="jjum" src={jjum} alt="jjum" width="70px" />
            <br />
            <br />
            <img className="jjum" src={jjum} alt="jjum" width="70px" />
          </div>
          <br />
        </div>
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-delay="3000"
        >
          <img className="gamagi" alt="gamagi" src={gamagi} width="500px" />
        </div>
      </div>
    </>
  );
}
