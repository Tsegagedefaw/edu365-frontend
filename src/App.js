import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";
import Home2 from "./pages/home2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home2" element={<Home2/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
