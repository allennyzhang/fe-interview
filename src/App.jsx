import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FE from "./FE";
import JS21 from "./JS21";
import JS22 from "./JS22";
import { React21 } from "./React21";
import React31 from "./React31";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Web Frontend Interview</h1>
          <Link to="/">Home</Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fe" element={<FE />} />
          <Route path="/js21" element={<JS21 />} />
          <Route path="/js22" element={<JS22 />} />
          <Route path="/react21" element={<React21 />} />
          <Route path="/react31" element={<React31 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
