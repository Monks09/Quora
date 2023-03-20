import React from "react";
import { Route, Routes } from "react-router-dom";
import Answer from "../Pages/Answer/Answer";
import Following from "../Pages/Following/Following";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import SingleQuestion from "../Pages/SingleQuestion/SingleQuestion";
import PostAnswer from "../Pages/PostAnswer/PostAnswer";

function AllRoutes(props) {
  return (
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
        path="/post/:id"
        element={
          <PrivateRoute>
            <PostAnswer />
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
        path="*"
        element={
          <PrivateRoute>
            <PageNotFound />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
