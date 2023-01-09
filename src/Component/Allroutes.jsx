import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Following from "../Pages/Folllowing/Following";
import Answer from "../Pages/Answer/Answer";
import { Route, Routes } from "react-router-dom";
import Private from "./Home/Private";
import PostAnswer from "./Home/PostAnswer";
import PrivateRoute from "../Pages/PrivateRoute";
function Allroutes() {
  return (
    <div>
      <PrivateRoute>
      <Navbar />
      </PrivateRoute>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/answer" element={<PrivateRoute><Answer /></PrivateRoute>} />
        <Route path="/following" element={<PrivateRoute><Following/></PrivateRoute>} />
        <Route path="/private/:url" element={<PrivateRoute><Private /></PrivateRoute>} />
        <Route path="/post/:id" element={<PrivateRoute><PostAnswer /></PrivateRoute>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
