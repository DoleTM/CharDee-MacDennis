import React from "react";
import "../styles/Main.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function Main(props) {
  return (
    <main className="container">
      <div aria-label="click item">{props.children}</div>
    </main>
  );
}

export default Main;