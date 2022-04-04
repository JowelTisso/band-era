import React from "react";
import "./Header.css";
import { IoLogOutOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { activeLinkStyle } from "./HeaderStyles";
import { useAuth } from "../../context/provider/AuthProvider";
import { userLogout } from "../../pages/auth/helper/authHelper";
import { useVideo } from "../../context/provider/VideoProvider";
import { CHANGE_GENRE } from "../../utils/Constants";

const Header = () => {
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { videoDispatch } = useVideo();

  const logoutHandler = () => {
    userLogout(authDispatch);
    navigate("/");
  };

  const clearSelectedGenre = () => {
    videoDispatch({ type: CHANGE_GENRE, payload: "" });
  };

  return (
    <header className="header-container pd-1x pd-right-3x pd-left-2x">
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
          <div onClick={clearSelectedGenre}>Videos</div>
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
        {authState.loggedIn ? (
          <button
            className="btn btn-secondary btn-sm no-deco btn-login"
            onClick={logoutHandler}
          >
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

        {authState.loggedIn && (
          <div className="pointer login-icon">
            <IoLogOutOutline className="ic-normal" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
