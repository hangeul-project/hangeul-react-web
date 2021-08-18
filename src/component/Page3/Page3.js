import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Page3() {
  return (
    <div>
      <div className="Sejong">
        <h2> 나에 대해 맞춰 보라굿!</h2>
      </div>
      <div className="Title">
        <h1>제 1회 천하제일 세종대회</h1>
        <h3>단 10문제로 알아보는 세종대왕 인싸력 테스트</h3>
        <Router>
          <Link to="/Q1"> 문제 시작 </Link>
          <Switch>
            <Route path="/Q1">
              <Q1 />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

function Q1() {
  return (
    <>
      <div className="Page3_text">
        <h1>세종대왕의 탄신일은 다음 국가 기념일의 날짜와 동일하다</h1>
        <ol>
          <li className="options"> 한글날 </li>
          <li className="options"> 스승의 날 </li>
          <li className="options"> 과학의 날</li>
        </ol>
      </div>
      <div>
        <Router>
          <Link to="/Q2"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q2">
              <Q2 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q2() {
  return (
    <>
      <div className="Page3_text">
        <h1>2. 대한민국의 한자와 한글의 한자는 동일한 한자를 사용한다</h1>
        <ul>
          <li className="options"> O </li>
          <li className="options"> X </li>
        </ul>
        <Router>
          <Link to="/Q3"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q3">
              <Q3 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q3() {
  return (
    <>
      <div className="Page3_text">
        <h1>3. 한글은 모든 소리를 표현하지 못한다. </h1>
        <ul>
          <li className="options"> O </li>
          <li className="options"> X </li>
        </ul>
        <Router>
          <Link to="/Q4"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q4">
              <Q4 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q4() {
  return (
    <>
      <div className="Page3_text">
        <h1>4. 한글의 로마자 표기법은 ㅁ, 영어로는 ㅇ이다. </h1>
        <ol>
          <li className="options"> ㅁ = Hangul ㅇ = Hangul </li>
          <li className="options"> ㅁ = Hangeul ㅇ = Hangeul </li>
          <li className="options"> ㅁ = Hangeul ㅇ = Hangul</li>
          <li className="options"> ㅁ = Hangul ㅇ = Hangeul</li>
        </ol>
        <Router>
          <Link to="/Q5"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q5">
              <Q5 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q5() {
  return (
    <>
      <div className="Page3_text">
        <h1>5. 다음 과일 중 순우리말인 것은? </h1>
        <ol>
          <li className="options"> 수박 </li>
          <li className="options"> 귤 </li>
          <li className="options"> 사과 </li>
          <li className="options"> 석류 </li>
        </ol>
        <Router>
          <Link to="/Q6"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q6">
              <Q6 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q6() {
  return (
    <>
      <div className="Page3_text">
        <h1>6. 다음 중 올바른 표준어는? </h1>
        <ol>
          <li className="options"> 공깃밥 </li>
          <li className="options"> 순대국 </li>
          <li className="options"> 쭈꾸미 </li>
          <li className="options"> 고기집 </li>
        </ol>
        <Router>
          <Link to="/Q7"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q7">
              <Q7 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q7() {
  return (
    <>
      <div className="Page3_text">
        <h1>7. 다음 중 맞춤법이 올바른 문장은? </h1>
        <ol>
          <li className="options"> 난 지금 너무 배고파서 눈에 봬는 게 없다 </li>
          <li className="options"> 오늘은 웬지 놀고 싶다 </li>
          <li className="options"> 이번엔 네가 꼭 이기길 바라 </li>
          <li className="options"> 네가 그러던 말던 상관 안 한다 </li>
        </ol>
        <Router>
          <Link to="/Q8"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q8">
              <Q8 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q8() {
  return (
    <>
      <div className="Page3_text">
        <h1>8. 다음 순우리말 중 뜻과 연결이 잘 못 된 단어는? </h1>
        <ol>
          <li className="options">
            나비잠: 갓난아이가 두 팔을 위로 벌리고 자는 잠
          </li>
          <li className="options"> 미쁘다: 믿음직스럽다 </li>
          <li className="options"> 도담도담: 어린아이가 무탈하게 잘 자란다 </li>
          <li className="options"> 미래내: 숲 속에 있는 작은 냇가 </li>
        </ol>
        <Router>
          <Link to="/Q9"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q9">
              <Q9 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q9() {
  return (
    <>
      <div className="Page3_text">
        <h1>9. 다음 띄어쓰기가 올바르지 않은 문장은? </h1>
        <ol>
          <li className="options">
            현수는 칠칠 맞지 못하게 준비물을 빠뜨렸다.
          </li>
          <li className="options"> 장학금은커녕 낙제만 안 하면 다행이다. </li>
          <li className="options"> 야채는 그만큼이면 충분하다. </li>
          <li className="options"> 이 일은 나와 너밖에 모른다. </li>
        </ol>
        <Router>
          <Link to="/Q10"> 다음 문제 </Link>
          <Switch>
            <Route path="/Q10">
              <Q10 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Q10() {
  return (
    <>
      <div className="Page3_text">
        <h1>
          10. 신문의 날인 4월 7일은 이 신문의 창간일로, 이 신문은 우리나라
          최초의 한글신문이었다. 주시경이 국문판 편집과 제작을 담당하였던 이
          신문은 어느 신문인가?
        </h1>
        <ol>
          <li className="options"> 한성순보 </li>
          <li className="options"> 독립신문</li>
          <li className="options"> 대한매일순보 </li>
          <li className="options"> 황성신문 </li>
        </ol>
      </div>
    </>
  );
}
