import React, { useRef, useState } from "react";
import "./Page5Container.css";
import StickyBar from "./StickyBar";
import Explanation from "./Explanation";
import IntroductionContainer from "./IntroductionContainer";

const Page5Container = () => {
  return (
    <div className="page5-outer-container">
      <StickyBar />
      <Explanation componentId="tab1" />
      <IntroductionContainer />
    </div>
  );
};

export default Page5Container;
