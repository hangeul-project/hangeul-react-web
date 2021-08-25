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
        <div
          className="Page2_line1"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-delay="100"
        >
          나 랏〮 말〯 ᄊᆞ 미〮 中 國 에〮 달 아〮
        </div>
        <br />
        <div className="Page2_together">
          <div
            className="Page2_line2"
            data-aos="fade-in"
            data-aos-offset="5"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1000"
          >
            <span>文 字 와〮 서 르 ᄉᆞ ᄆᆞᆺ 디〮</span>
            <span> 아 니〮 ᄒᆞᆯ ᄊᆡ〮</span>
          </div>
          <br />
          <div
            data-aos="fade-in"
            data-aos-offset="5"
            data-aos-easing="ease-in-sine"
            data-aos-delay="2000"
          >
            ...?
          </div>
        </div>
        <br />
        <img className="cat_photo" alt="cute cat" src={cat} />
      </div>
    </>
  );
}
