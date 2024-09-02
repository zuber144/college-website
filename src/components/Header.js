import React from "react";
import "../App.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-content">
            <a href="#" className="nav">
              About Us
            </a>
            <a href="#" className="nav">
              Contact Us
            </a>
            <div className="dropdown">
              <button href="#" className="dropbtn">
                Login <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">As a Admin</a>
                <Link to="/hodlog">As a HOD</Link>
                <a href="#">As a Teacher</a>
                <a href="#">As a Parent</a>
              </div>
            </div>
            <Link to="/" className="nav">
              Home
            </Link>
          </div>
          <a href="https://www.sgpbellary.com/">
            <img src={logo} alt="th.jpg" id="logo" />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
