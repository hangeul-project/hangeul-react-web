import React from "react";
import "./App.css";
import PageScroll from "../main/Scroll";
import Page4 from "../component/Page4/component/Page4";
// import Page3 from "../component/Page3/Page3"; TODO: Uncomment this for checking only Page3

// Rollback changes in this file before push or pull request !
export default function App() {
  return (
    <>
      <div>
        {/* <PageScroll /> */}
        {/* <Page3 /> */}
        {/* TODO: Uncomment this for checking only Page3 */}
        <Page4 />
      </div>
    </>
  );
}
