import React from "react";

function Sidebar_Button({ img, name }) {
  return (
    <div className="Sidebar_Button">
      <img src={img} alt="img" width="40px" height="40px" />
      <span>{name}</span>
    </div>
  );
}

export default Sidebar_Button;
