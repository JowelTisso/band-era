import React, { useState } from "react";
import "./Auth.css";
import { IoEye, IoEyeOff, IoChevronForward } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/provider/AuthProvider";
import { userLogIn, userSignUp } from "./helper/authHelper";
import { LOG_IN, SIGN_UP } from "../../utils/Constants";
import { callToast } from "../../components/toast/Toast";

const Auth = () => {
  const [authTypeIsLogin, setAuthTypeIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "test@gmail.com",
    password: "test123",
  });
  const [togglePassword, setTogglePassword] = useState(false);

  const { firstName, lastName, email, password } = credentials;

  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const changeAuthType = () => {
    setAuthTypeIsLogin((state) => !state);
    setCredentials({
      email: "",
      password: "",
    });
  };

  const emailChangeHandler = ({ target }) => {
    setCredentials((state) => ({ ...state, email: target.value }));
  };
  const passwordChangeHandler = ({ target }) => {
    setCredentials((state) => ({ ...state, password: target.value }));
  };

  const nameChangeHandler = ({ target }, nameType) => {
    setCredentials((state) => ({ ...state, [nameType]: target.value }));
  };

  const showPassword = () => {
    setTogglePassword((state) => !state);
  };

  const loginHandler = async () => {
    try {
      if (email && password) {
        const res = await userLogIn({
          email: email,
          password: password,
        });
        if (res?.status === 200 || res?.status === 201) {
          authDispatch({
            type: LOG_IN,
            payload: {
              token: res?.data?.encodedToken,
              user: res?.data?.foundUser,
            },
          });
          navigate(from, { replace: true });
        }
      } else {
        callToast("All fields are required!", false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signupHandler = async () => {
    try {
      if (!email.includes("@")) {
        callToast("Invalid email", false);
        return;
      }
      if (firstName && lastName && email && password) {
        const res = await userSignUp({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        if (res?.status === 200 || res?.status === 201) {
          authDispatch({
            type: SIGN_UP,
            payload: {
              token: res?.data?.encodedToken,
              user: res?.data?.createdUser,
            },
          });
          setCredentials((state) => ({
            ...state,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }));
        }
      } else {
        callToast("All fields are required!", false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fillTestCredentials = () => {
    setCredentials((state) => ({
      ...state,
      email: "test@gmail.com",
      password: "test123",
    }));
  };

  return (
    <div
      className={`content-wrapper ${
        !authTypeIsLogin && "mg-top-6x pd-top-1x flex-center"
      }`}
    >
      <div
        className={`login-card flex-center ${
          authTypeIsLogin ? "wd-5x pd-5x" : "pd-2x"
        } `}
      >
        <p
          className={`h3 text-center mg-top-2x  ${
            authTypeIsLogin ? "mg-bottom-4x" : "mg-bottom-2x"
          } `}
        >
          {authTypeIsLogin ? "Login" : "Signup"}
        </p>

        {!authTypeIsLogin && (
          <>
            <div className="input-container mg-top-2x wd-4x">
              <label className="input-label">First Name</label>
              <input
                type="text"
                className="input-simple"
                placeholder="Neog"
                value={credentials.firstName}
                onChange={(e) => nameChangeHandler(e, "firstName")}
              />
            </div>
            <div className="input-container mg-top-2x wd-4x">
              <label className="input-label">Last Name</label>
              <input
                type="text"
                className="input-simple"
                placeholder="camp"
                value={credentials.lastName}
                onChange={(e) => nameChangeHandler(e, "lastName")}
              />
            </div>
          </>
        )}

        <div className="input-container mg-top-2x ">
          <label className="input-label">Email address</label>
          <input
            type="email"
            className="input-simple"
            placeholder="test@gmail.com"
            value={credentials.email}
            onChange={emailChangeHandler}
          />
        </div>

        <div className="input-container mg-top-2x wd-4x">
          <label className="input-label">Password</label>
          <div className="toggle-icon-container">
            <input
              type={togglePassword ? "text" : "password"}
              className="input-simple"
              placeholder="test123"
              value={credentials.password}
              onChange={passwordChangeHandler}
            />
            <div onClick={showPassword}>
              {togglePassword ? (
                <IoEyeOff className="toggle-icon pointer" />
              ) : (
                <IoEye className="toggle-icon pointer" />
              )}
            </div>
          </div>
        </div>

        <div className="info-container flex-center mg-2x">
          <div>
            <input type="checkbox" className="checkbox" />
            <label className="t4 mg-left-1x">
              {authTypeIsLogin
                ? "Remember me"
                : "I accept all Terms and Conditions"}
            </label>
          </div>
          {authTypeIsLogin && (
            <button className="btn-link btn-link-secondary t4">
              Forgot your password?
            </button>
          )}
        </div>

        <button
          className="btn btn-primary wd-full mg-top-2x"
          onClick={() => {
            authTypeIsLogin ? loginHandler() : signupHandler();
          }}
        >
          {authTypeIsLogin ? "Login" : "Create New Account"}
        </button>

        <div className="bottom-nav-container mg-top-4x ">
          <button
            className="t4 text-center pointer no-deco btn-link btn-link-secondary mg-right-1x mg-left-2x"
            onClick={changeAuthType}
          >
            {authTypeIsLogin ? "Create New Account" : "Already have an account"}
          </button>
          <IoChevronForward className="goto-icon" />
        </div>
        {authTypeIsLogin && (
          <button
            className="t4 text-center pointer no-deco btn-link btn-link-secondary mg-top-2x"
            onClick={fillTestCredentials}
          >
            Fill test credentials
          </button>
        )}
      </div>
    </div>
  );
};

export { Auth };
