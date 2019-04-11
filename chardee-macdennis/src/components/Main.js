import React from "react";
import "../styles/Main.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function Main(props) {
  return (
      <main className="container">{props.children}</main>
  );
}

export default Main;