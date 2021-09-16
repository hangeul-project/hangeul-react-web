import React, { useEffect } from "react";
import "./App.css";
import PageScroll from "../main/Scroll";
// import Page5 from "../component/Page5/Page5";
import Page4 from "../component/Page4/component/page4";
// import Page3 from "../component/Page3/Page3";

// Rollback changes in this file before push or pull request !
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
        {/* <PageScroll /> */}
        {/* page3 확인용 */}
        {/* <Page3 /> */}
        {/* page4 확인용 */}
        <Page4 />
        {/* <Page5 /> */}
      </div>
    </>
  );
}
