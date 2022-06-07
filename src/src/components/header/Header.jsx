import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/provider/AuthProvider";
import { userLogout } from "../../pages/auth/helper/authHelper";
import { useVideo } from "../../context/provider/VideoProvider";
import { CHANGE_GENRE } from "../../utils/Constants";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMenuVisivle, setIsMenuVisivle] = useState(false);
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { videoDispatch } = useVideo();
  const location = useLocation();
  const isAuth = location.pathname === "/auth";

  const logoutHandler = () => {
    userLogout(authDispatch);
    navigate("/");
  };

  const clearSelectedGenre = () => {
    videoDispatch({ type: CHANGE_GENRE, payload: "" });
  };

  const activeLink = {
    borderBottom: "2px solid #e7e7e4",
  };

  const activeLinkStyle = ({ isActive }) => (isActive ? activeLink : undefined);

  const toggleMenu = () => {
    setIsMenuVisivle((isVisible) => !isVisible);
  };

  return (
    <header className="header-container pd-1x pd-right-3x pd-left-2x">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <Link to={"/"} className="t3 mg-left-1x pointer logo-title no-deco">
          Band Era
        </Link>
      </div>
      <nav className={`header-middle ${isMenuVisivle && "show-sidenav"}`}>
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
          Playlist
        </NavLink>
        <NavLink
          to={"/history"}
          className="btn-link nav-link-hover btn-sm no-deco mg-right-2x"
          style={activeLinkStyle}
        >
          History
        </NavLink>
      </nav>
      <div
        className={`menu-backdrop ${isMenuVisivle && "show-backdrop"}`}
        onClick={toggleMenu}
      ></div>
      <nav className="nav-container">
        {!isAuth &&
          (authState.loggedIn ? (
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
          ))}

        <button className="pointer menu-icon flex-center" onClick={toggleMenu}>
          <IoMenu className="t3" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
