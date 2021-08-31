import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Page1 from "./component/Page1/Page1"
import page4s from "./component/Page4/component/page4s"
// import Page4 from "./component/Page4/component/page4";

function App() {
  return (
    <Router>
      <div>
        <Swtich>
          <Route path="/">
            <page4s></page4s>
          </Route>
        </Swtich>
      </div>
    </Router>
  )
}
export default App
