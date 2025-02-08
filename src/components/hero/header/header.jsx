import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div>
        <h1>IntelliSaaS AI</h1>
        <nav>
          <ul>
            <li>
              <a href="#home" className="selected">
                Home
              </a>
            </li>
            <li>
              <a href="#features">About</a>
            </li>
            <li>
              <a href="#pricing">Features</a>
            </li>
            <li>
              <a href="#contact">Pricing</a>
            </li>
            <li>
              <a href="#contact">Blog</a>
            </li>
          </ul>
        </nav>
        <button className="btn">Book a Demo</button>
      </div>
    </header>
  );
};

export default Header;
