import React from "react";
import "./presentation.css";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation-title-container">
        <h2 className="presentation-title">
          Unlock AI-Powered Insights to Drive
        </h2>
        <h2 className="presentation-title-colored">Business Decisions Today</h2>
      </div>
      <p className="presentation-text">
        Transform your data into actionable intelligence with our AI-driven
        SaaS, designed to optimize efficiency, automate workflows, and provide
        predictive insights for informed decision-making.{" "}
      </p>
      <div className="button-container">
        <button className="btn">Book a Demo</button>
        <button className="btn">Take Product Tour ▶️</button>
      </div>
    </div>
  );
};

export default Presentation;
