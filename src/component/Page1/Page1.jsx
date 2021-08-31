import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import AOS from "aos"
import "./aos.css"
import "./Page1.css"

const Page1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })
  return (
    <>
      <div className="container">
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
          <div className="greeting__hola">¡Hola</div>
          <div className="greeting__goni">こんにちは</div>
        </div>
        <div
          className="greeting__fifth"
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="4000"
        >
          <div className="greeting__sawa">สวัสดีครับ</div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-offset="5"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <Home></Home>
        </div>
      </div>
    </>
  )
}

function Home() {
  function handleClick(e) {
    window.location.replace("Page4/component/page4.jsx")
  }
  return (
    <button type="button" onClick={handleClick}>
      다음으로
    </button>
  )
}

export default Page1
