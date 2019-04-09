import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header(props) {
  return (
    <header className="header">
    Score: {props.data} | Top Score: {props.data}
    </header>
  );
}

export default Header;