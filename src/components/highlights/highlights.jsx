import React from "react";
import "./highlights.css";
import Icon1 from "../../assets/img/features/Icon1.svg";
import Icon2 from "../../assets/img/features/Icon2.svg";
import Icon3 from "../../assets/img/features/Icon3.svg";
import Line from "../../assets/img/features/Line.svg";

import highimg1 from "../../assets/img/a9f8f4f8c06e6c1add23077a2b402281.png";
import highimg2 from "../../assets/img/9ffa812aef9b7018093396880550107f.png";

const features = [
  {
    icon: Icon1,
    title: "Cutting-Edge Innovation",
    description:
      "Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.",
  },
  {
    icon: Icon2,
    title: "Seamless Connectivity",
    description:
      "Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world.",
  },
  {
    icon: Icon3,
    title: "Intuitive User Interface",
    description:
      "Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.",
  },
];

const basicHighLight = [
  {
    title: "Integrations",
    subtitle: "Unified view of your customers",
    description:
      "Enterpret will integrate directly with any feedback channel. Take advantage of our CSV importer or API",
    img: highimg1,
    btn: "View all Integrations",
  },
  {
    title: "Security",
    subtitle: "Built for scale and enterprise level security",
    description:
      "SOC-2 Type II certification, penetration tested, and regular vulnerability scans. Hosted behind a VPC. Data encryption at rest and transit.",
    img: highimg2,
    btn: "Learn More",
  },
];

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="features">
        <div className="features-header">
          <h2 className="highlight-title">Features</h2>
          <h3 className="highlight-subtitle">
            Discover the Tools that Drive Success
          </h3>
          <p className="highlight-description">
            Unleash innovation and accelerate growth with our dynamic product.
          </p>
        </div>
        <div className="features-table">
          {features.map((feature, index) => (
            <React.Fragment key={`"feature-"${index}`}>
              <div className="features-item">
                <img src={feature.icon} alt="feature icon" />
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
              {index < features.length - 1 && <hr className="line" />}{" "}
              {/* Ajouter une ligne */}
            </React.Fragment>
          ))}
        </div>
        <div className="features-btn">
          <button className="btn">Contact Us</button>
          <button className="viewAll">{"View All >"}</button>
        </div>
      </div>
      <div>
        <div className="highlights-header"></div>
        <div className="highlights-table">
          {basicHighLight.map((highlight, index) => (
            <div
              key={`"highlight-"${index}`}
              className={`highlights-item ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="highlights-text">
                <h2 className="highlight-title">{highlight.title}</h2>
                <h3 className="highlight-subtitle">{highlight.subtitle}</h3>
                <p className="highlight-description">{highlight.description}</p>
                <button className="btn">{highlight.btn}</button>
              </div>
              <div className="highlights-img">
                <img src={highlight.img} alt="highlight" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
