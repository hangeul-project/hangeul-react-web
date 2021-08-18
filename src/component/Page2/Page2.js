import React, { useEffect } from "react";
import AOS from "aos";
import "./Page2.css";
import "../Page3/Page3";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Page1/aos.css";
import "./cat.jpeg";

export default function Page2() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="Page2_text" data-aos="fade-up" data-aos-duration="3000">
        <p>나랏말싸미 듕귁에달아 문자와로</p>
        <br />
        <p data-aos-duration="2000"> 서로 사맛디 아니할쎄</p>
        <div data aos="fade-up" data-aos-duraiton="3000">
          ...?
        </div>
        <img className="cat" alt="cute cat" src="cat.jpeg" />
      </div>
      <div>
        <Router>
          <Link to="/Page3"> Next </Link>
          <Switch>
            <Route path="/Page3">
              <Page3 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
