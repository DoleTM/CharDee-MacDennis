import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">"Chardee MacDennis: The Game of Games"</a>
    </nav>
  );
}

export default Navbar;