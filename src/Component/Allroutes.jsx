import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Following from "../Pages/Folllowing/Following";
import Answer from "../Pages/Answer/Answer";
import { Route, Routes } from "react-router-dom";
import Private from "./Home/Private";
import PostAnswer from "./Home/PostAnswer";
import PrivateRoute from "../Pages/PrivateRoute";
import Login from "../Pages/Login/Login";
import { user } from "../Api/Url";
import SingleQuestion from "../Pages/SingleQuestion/SingleQuestion";
import PageNotFound from "../Pages/PageNotFound";

function Allroutes() {
  const [Log, setLog] = useState("Loading");
  useEffect(() => {
    fetch(`${user}?login=true`).then((res) => {
      res.json().then((res) => {
        if (res.length > 0) {
          setLog(true);
        } else {
          setLog(false);
        }
      });
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/answer"
          element={
            <PrivateRoute>
              <Answer />
            </PrivateRoute>
          }
        />
        <Route
          path="/answer/:id"
          element={
            <PrivateRoute>
              <SingleQuestion />
            </PrivateRoute>
          }
        />
        <Route
          path="/following"
          element={
            <PrivateRoute>
              <Following />
            </PrivateRoute>
          }
        />
        <Route
          path="/private/:url"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
        <Route path="/post/:id" element={<PostAnswer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
