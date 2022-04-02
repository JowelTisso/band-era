import React from "react";
import "./Header.css";
import { IoLogOutOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { activeLinkStyle } from "./HeaderStyles";

const Header = () => {
  return (
    <header className="header-container pd-1x pd-right-4x pd-left-4x">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <Link to={"/"} className="t3 mg-left-1x pointer logo-title no-deco">
          Band Era
        </Link>
      </div>
      <div className="header-middle">
        <NavLink
          to={"/"}
          className="btn-link nav-link-hover btn-sm no-deco mg-right-2x"
          style={activeLinkStyle}
        >
          Home
        </NavLink>
        <NavLink
          to={"/videos"}
          className="btn-link nav-link-hover btn-sm no-deco mg-right-2x"
          style={activeLinkStyle}
        >
          Videos
        </NavLink>
        <NavLink
          to={"/watchlater"}
          className="btn-link nav-link-hover btn-sm no-deco mg-right-2x"
          style={activeLinkStyle}
        >
          Watch Later
        </NavLink>
        <NavLink
          to={"/playlist"}
          className="btn-link nav-link-hover btn-sm no-deco mg-right-2x"
          style={activeLinkStyle}
        >
          PLaylist
        </NavLink>
        <NavLink
          to={"/history"}
          className="btn-link nav-link-hover btn-sm no-deco mg-right-2x"
          style={activeLinkStyle}
        >
          History
        </NavLink>
      </div>
      <nav className="nav-container">
        {/* Condition to be changed later */}
        {false ? (
          <button className="btn btn-secondary btn-sm no-deco btn-login">
            Logout
          </button>
        ) : (
          <Link
            to={"/auth"}
            className="btn btn-primary btn-sm no-deco btn-login"
          >
            Login
          </Link>
        )}

        {/* Condition to be changed later */}
        {false && (
          <div className="pointer login-icon">
            <IoLogOutOutline className="ic-normal" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
