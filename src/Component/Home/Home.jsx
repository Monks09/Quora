import React from "react";
import Ad from "./Ad";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div></div>
      <Main />
      <div></div>
      <Ad />
    </div>
  );
}

export default Home;
