import React, { useEffect } from "react";
import "./App.css";
import Page1 from "../component/Page1/Page1";
import Page2 from "../component/Page2/Page2";
import Page3 from "../component/Page3/Page3";
import Page4 from "../component/Page4/component/Page4";
import Page4Sharing from "../component/Page4/component/Page4Sharing";
import Page5 from "../component/Page5/Page5";

// Rollback changes in this file before push orgin pull request !
export default function App() {
  useEffect(() => {
    // 사용자가 퀴즈에서 선택한 선택지가 Page Refresh 이후 삭제될 수 있도록 함
    window.onbeforeunload = () => localStorage.clear();
    return () => {
      window.onbeforeunload = null;
    };
  }, []);
  return (
    <>
      <div>
        <Page1 />
      </div>
      <div>
        <Page2 />
      </div>
      <div>
        <Page3 />
      </div>
      <div>
        <Page4 />
      </div>
      <div>
        <Page4Sharing />
      </div>
      <div>
        <Page5 />
      </div>
    </>
  );
}
