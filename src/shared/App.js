import React, { useEffect } from "react";
import "./App.css";
import PageScroll from "../main/Scroll";
import Page5 from "../component/Page5/Page5";
// import page4 from "../component/page4/page4"

// Rollback changes in this file before push or pull request !
export default function App() {
  useEffect(() => {
    window.onbeforeunload = () => localStorage.clear();

    return () => {
      window.onbeforeunload = null;
    };
  }, []);
  return (
    <>
      <div>
        <PageScroll />
        {/* page4 확인용 */}
        {/* <page4 />} */}
        <Page5 />
      </div>
    </>
  );
}
