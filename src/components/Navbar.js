import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react";

export default function Navbar(props) {
  const [darkMode, setDarkMode] = useState('light');
  const [myNavBg, setmyNavBg] = useState('bg-body-tertiary');
  const toggleMode = () => {
    if (darkMode ==='light'){
      setDarkMode('dark')
      setmyNavBg('')
      //document.body.style.background = 'gray';
    }
    else {
      setmyNavBg('bg-body-tertiary')
      setDarkMode('light')
      //document.body.style.background = 'white';
    }
    }
  return (
    <>
    <div className="container" style={{color: darkMode ==='dark'?'white':'dark'}}>
      <nav className={`navbar navbar-expand-lg navbar-${darkMode} bg-dark ${myNavBg}`} >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              

            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" unchecked />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Mode</label>
              </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
