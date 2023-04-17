import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../Avatar/Avatar";

import "./Navbar.css";

const Navbar = () => {
  var User = null;
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="navitem nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="navitem nav-btn">
          About
        </Link>
        <Link to="/" className="navitem nav-btn">
          Products
        </Link>
        <Link to="/" className="navitem nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="search" />
          <img src={search} alt="search" width="18px" className="search-icon" />
        </form>

        {User === null ? (
          <Link to="/Auth" className="navitem nav-btn nav-links">
            Log In
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
            >
              <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              ></Link>
              M
            </Avatar>

            <button className="navitem  nav-links">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
