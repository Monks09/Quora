import React from "react";
import { Route, Routes } from "react-router-dom";
import Answer from "./Home/Answer";
import Home from "./Home/Home";
import Private from "./Home/Private";
import Navbar from "./Navbar/Navbar";

function Allroutes() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer/:id" element={<Answer />} />
        <Route path="/private/:url" element={<Private/>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
