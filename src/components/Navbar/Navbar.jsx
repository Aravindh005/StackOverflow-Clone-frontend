import React from "react";

import { Link } from "react-router-dom";

import logo from "../../ass/logo2.png";

import searchIcon from "../../ass/searchicon.svg";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

import "./Navbar.css";

const Navbar = () => {

  var user = null;

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to='/' className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">About</Link>
        <Link to="/" className="nav-item nav-btn">Products</Link>
        <Link to="/" className="nav-item nav-btn">For Teams</Link>
        <form>
          <input type="text" placeholder="Search.." />
          <img src={searchIcon} alt="searchLens" width={18} className="search-icon" />
        </form>

        {user === null ? <Link to="/Auth" className="nav-item nav-links">Log In</Link> :
          <>
            <Avatar
              backgroundColor={"#009dff"}
              px={"10px"} py={"7px"}
              borderRadius={"50%"}
              color={"white"}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>M</Link>
            </Avatar>
            <button>LogOut</button>
          </>
        }

      </div>
    </nav>);

}

export default Navbar;