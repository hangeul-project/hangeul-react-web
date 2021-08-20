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
      <div className="Page2_text" data-aos="fade-up" data-aos-duration="1000">
        <p>나랏말싸미 듕귁에달아 문자와로</p>
        <br />
        <p data-aos-duration="2000"> 서로 사맛디 아니할쎄</p>
        <div data aos="fade-up" data-aos-duraiton="3000">
          ...?
        </div>
        <img className="photo" alt="cute cat" src={cat} />
      </div>
    </>
  );
}
