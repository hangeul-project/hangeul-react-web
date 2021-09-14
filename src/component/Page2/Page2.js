import React, { useEffect } from "react";
import AOS from "aos";
import "./Page2.css";
import "../Page1/aos.css";
import jjum from "./pg2_img/jjum.png";
import crow from "./pg2_img/crow.png";

export default function Page2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="outer-container-page2">
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
          나랏말싸미 듕귁에달아
        </div>
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
        >
          문자와로 서로
        </div>
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="500"
          data-aos-anchor-placement="top-center"
        >
          사맛디 아니할쎄
        </div>
        <br />
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          data-aos-delay="700"
          data-aos-anchor-placement="top-center"
        >
          {/* 여기 너무 딜레이 길어서 좀 줄였어요 */}
          <img className="jjum" alt="jjum" src={jjum} width="70px" />
        </div>
        <br />
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          data-aos-delay="700"
          data-aos-anchor-placement="top-center"
        >
          <img className="jjum" alt="jjum" src={jjum} width="70px" />
        </div>
        <br />
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          data-aos-delay="700"
          data-aos-anchor-placement="top-center"
        >
          <img className="jjum" alt="jjum" src={jjum} width="70px" />
        </div>
        <br />
        <div
          className="crow"
          data-aos="fade-in"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          data-aos-delay="700"
          data-aos-anchor-placement="top-center"
        >
          <img className="crow" alt="crow" src={crow} width="400px" />
        </div>
      </div>
    </>
  );
}
