import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div>
        <h1>SaaS AI</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="btn">Book a Demo</button>
      </div>
    </header>
  );
};

export default Header;
