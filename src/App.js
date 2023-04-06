import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import Section1 from "./pages/section1.js";
import Section2 from "./pages/section2.jsx";
import Section3 from "./pages/section3.jsx";
import Section4 from "./pages/section4.jsx";
import Section5 from "./pages/section5.jsx";
import data from "./pages/data";
import { useState } from "react";
import Details from "./pages/Details";

function App() {
  let nav = useNavigate;
  let [pd, setPd] = useState(data);
  console.log(pd);
  return (
    <div className="App">
      <header className="App-header mw">
        <img src="/img/logo.svg" className="logo" />
        <nav className="gnb">
          <Link to="/sec2">section2</Link>
          <Link to="/sec3">section3</Link>
          <Link to="/sec4">section4</Link>
          <Link to="/sec5">section5</Link>
        </nav>
        <button
          onClick={() => {
            nav(-2);
          }}
          className="person"
        >
          구입페이지
        </button>
      </header>
      <Routes>
        <Route path="*" element={<div>페이지 없음 (404)</div>} />
        <Route path="/" element={<Section1 />} />

        <Route path="/sec2" element={<Section2 data={pd} />} />
        <Route path="/sec3" element={<Section3 />}>
          <Route path="member" element={<div>회사소개</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route path="/sec4" element={<Section4 />} />
        <Route path="/sec5" element={<Section5 />} />
        <Route path="/detail/:id" element={<Details data={pd} />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
      </Routes>
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Section5 /> */}
      <footer>
        <div className="ft_gnb">
          <img src="/img/logo.svg" />
          <a href="#">HOME</a>
          <a href="#">회사소개</a>
          <a href="#">제안</a>
          <a href="#">장바구니</a>
          <a href="#">FAQ</a>
        </div>
        <div className="ft_tnb">
          <a href="#">
            <img src="/img/sns03.png" />
          </a>
          <a href="#">
            <img src="/img/sns02.png" />
          </a>
          <a href="#">
            <img src="/img/sns01.png" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
