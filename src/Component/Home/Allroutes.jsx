import React from "react";
import { Route, Routes } from "react-router-dom";
import Answer from "./Answer";
import Home from "./Home";
import Private from "./Private";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer/:id" element={<Answer />} />
        <Route path="/private/:url" element={<Private />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
