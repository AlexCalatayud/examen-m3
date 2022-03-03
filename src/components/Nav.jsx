import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="menu">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="Home">
          <img src={Logo} />
          Henry-Weather App
        </a>
        <nav className="SearchBar">
          <SearchBar onSearch={onSearch} />
        </nav>
      </nav>
    </div>
  );
}

export default Nav;
