import React, { useEffect } from "react";
import AOS from "aos";
import "./Page2.css";
import "../Page1/aos.css";
import cat from "./cat.jpeg";

export default function Page2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="Page2_text">
        <br />
        <br />
        <br />
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          나랏말싸미 듕귁에달아
        </div>
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="500"
        >
          문자와로 서로
        </div>
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="1000"
        >
          사맛디 아니할쎄
        </div>
        <br />
        <br />
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="1500"
        >
          .
        </div>
        <br />
        <br />
        <div
          data-aos="fade-in"
          data-aos-offset="700"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="2000"
        >
          .
        </div>
        <br />
        <br />
        <div
          className="crow"
          data-aos="fade-in"
          data-aos-offset="800"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="2500"
        >
          🕊
        </div>
      </div>
      <img className="cat_photo" alt="cute cat" src={cat} />
    </>
  );
}
