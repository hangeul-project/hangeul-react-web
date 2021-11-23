import React from "react";
import "./StickyBar.css";

const StickyBar = () => {
  return (
    <div className="sticky-bar-outer-container" id="sticky-bar">
      <ul className="nav">
        <li>
          <a href="#tab1">해설</a>
        </li>
        <li>
          <a href="#tab2">선물</a>
        </li>
        <li>
          <a href="#tab3">소개</a>
        </li>
      </ul>
    </div>
  );
};

export default StickyBar;
