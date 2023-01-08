import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home"
import Following from "../Pages/Folllowing/Following";
import Answer from "../Pages/Answer/Answer";
import { Route,Routes } from "react-router-dom";
import Private from "./Home/Private";
function Allroutes() {
  return (
    <div>
      <Navbar/>
      {/*  */}
      {/* <Answer/> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer" element={<Answer/>} />
        <Route path="/following" element={<Following/>} />
        <Route path="/post/:url" element={<Private/>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
