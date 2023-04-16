import React from "react";
import { Route, Routes } from "react-router-dom";
import Answer from "../Pages/Answer/Answer";
import Following from "../Pages/Following/Following";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import SingleQuestion from "../Pages/SingleQuestion/SingleQuestion";
import PostAnswer from "../Pages/PostAnswer/PostAnswer";
import Auth from "./Auth";

function AllRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
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
