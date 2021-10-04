import React, { useRef, useState } from "react";
import "./Page5.css";
import StickyBar from "./StickyBar";
import Explanation from "./Explanation";
import IntroductionContainer from "./IntroductionContainer";
import Present from "./Present";

const Page5 = () => {
  return (
    <div className="page5-outer-container">
      <StickyBar />
      <Explanation componentId="tab1" />
      <Present componentId="tab2" />
      <IntroductionContainer componentId="tab3" />
    </div>
  );
};

export default Page5;
