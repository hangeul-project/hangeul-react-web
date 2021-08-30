import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AOS from "aos"
import sejong from "./sejong.png"
import "../Page1/aos.css"
import "./Page3.css"
import Q1 from "./Q1"

export default function Page3() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <div
        className="Sejong"
        data-aos="fade-up"
        data-aos-duraiton="1000"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <img
          className="sejong_photo"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          alt="sejong"
          src={sejong}
        />
        <span className="cele">한글날 기념</span>
      </div>
      <div
        className="Sejong"
        data-aos="fade-up"
        data-aos-duraiton="1000"
        data-aos-once="false"
      >
        <h1>제 1회 천하제일 세종대회</h1>
        <h3>단 10문제로 알아보는 세종대왕 인싸력 테스트</h3>
      </div>
      <div>
        <Router>
          <Link to="/Q1">문제 시작</Link>
          <Switch>
            <Route path="/Q1" component={Q1} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}
