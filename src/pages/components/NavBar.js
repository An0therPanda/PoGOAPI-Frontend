/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/images/logo.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" width="60" height="60" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/tipos">
            Tipos
          </a>
        </li>
        <li>
          <a className="nav-link" href="/eficacias">
            Eficacias
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
