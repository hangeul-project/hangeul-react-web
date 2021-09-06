import React from "react";
import Scroll from "react-scroll";
import Page1 from "../component/Page1/Page1";
import Page2 from "../component/Page2/Page2";
import Page3 from "../component/Page3/Page3";
import "./Scroll.css";

export default function PageScroll() {
  return (
    <div className="containerScroll">
      <ul className="mark">
        <li>
          <Scroll.Link
            activeClass="active"
            to="/"
            spy
            smooth
            offset={50}
            duration={500}
          >
            <Page1 />
          </Scroll.Link>
        </li>
        <li>
          <Scroll.Link
            activeClass="active"
            to="/"
            spy
            smooth
            offset={50}
            duration={500}
          >
            <Page2 />
          </Scroll.Link>
        </li>
        <li>
          <Scroll.Link
            activeClass="active"
            to="/"
            spy
            smooth
            offset={50}
            duration={500}
          >
            <Page3 />
          </Scroll.Link>
        </li>
      </ul>
    </div>
  );
}
