import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <header>
      <ul id="headerButtons">
        <li className="navButton">
          <Link to="">Home</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
