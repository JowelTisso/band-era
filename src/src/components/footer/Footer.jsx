import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section footer-logo">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <p className="t3 mg-left-1x pointer logo-title no-deco">Band Era</p>
        </div>
        <p className="mg-top-2x t5">
          © 2022. band-era.netlify.app All rights reserved.
        </p>
      </section>
      <section className="footer-section footer-explore">
        <p className="t4 footer-section-title">Explore</p>
        <div className="explore-links">
          <Link to={"/home"} className="no-deco t4">
            Home
          </Link>
          <Link to={"/videos"} className="no-deco t4">
            Videos
          </Link>
          <Link to={"/watchlater"} className="no-deco t4">
            Watch Later
          </Link>
          <Link to={"/playlist"} className="no-deco t4">
            Playlist
          </Link>
          <Link to={"/history"} className="no-deco t4">
            History
          </Link>
        </div>
      </section>
      <section className="footer-section footer-company">
        <p className="t4 footer-section-title">Company</p>
        <div>
          <p className="t4 mg-top-1x">Band Era</p>
          <p className="t4 mg-top-2x">About</p>
          <p className="t4 mg-top-2x">Contact Us</p>
          <p className="t4 mg-top-2x">Advertisement</p>
          <p className="t4 mg-top-2x">FAQ</p>
        </div>
      </section>
      <section className="footer-section footer-legal">
        <p className="t4 footer-section-title">Legal</p>
        <div>
          <p className="t4 mg-top-1x">Privacy</p>
          <p className="t4 mg-top-2x">Terms</p>
          <p className="t4 mg-top-2x">Content Complaints</p>
          <p className="t4 mg-top-2x">Complaince Report</p>
        </div>
      </section>
      <section className="footer-section footer-follow">
        <p className="t4 footer-section-title">Follow Us</p>
        <div className="explore-links">
          <a
            href="https://github.com/JowelTisso/band-era"
            target={"_blank"}
            rel="noreferrer"
          >
            <IoLogoGithub className="t2" />
          </a>
          <IoLogoLinkedin className="t2" />
          <IoLogoTwitter className="t2" />
          <IoLogoYoutube className="t2" />
          <IoLogoInstagram className="t2" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
