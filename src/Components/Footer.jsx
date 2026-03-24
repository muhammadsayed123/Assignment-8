import React from "react";
import logo from '../assets/pic/logo.png'
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-[30px] w-[30px]"
          />
          <p
            className="font-bold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          >
            HERO.IO
          </p>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-bold">HERO.IO</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
