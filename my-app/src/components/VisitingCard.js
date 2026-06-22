import React from "react";
import "./VisitingCard.css";

function VisitingCard() {
  return (
    <div className="card">
      <div className="left-section">
        <div className="logo">
          <span className="red-s">S</span>
          <span className="white-s">S</span>
        </div>

        <h1>
          <span className="red">SHANNY</span>
          <br />
          <span className="white">SHARMA</span>
        </h1>

        <div className="line"></div>

        <p>React Developer</p>
      </div>

      <div className="divider"></div>

      <div className="right-section">
        <div className="info"> 9992497469</div>
        <div className="info"> shannysharma127026@gmail.com</div>
        <div className="info"> Panipat</div>
      </div>
    </div>
  );
}

export default VisitingCard;