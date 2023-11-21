import React from 'react'
import "../style/Welcome.css";
import {Button} from "react-bootstrap";
function welcome() {
  return (
    <div className="main">
      <div className="image1">
        <img
          src={require("../assets/Images/freepik--background-simple--inject-112.png")}
          alt="Ellipse"
        />
      </div>
      <div className="image2">
        <img
          src={require("../assets/Images/freepik--Speedometer--inject-112.png")}
          alt="Ellipse"
        />
      </div>
      <div className="image3">
        <img
          src={require("../assets/Images/freepik--Character--inject-112.png")}
          alt="Ellipse"
        />
      </div>
      <div className="tag-line">
        <p>Fast, Flexible, Friendly</p>
      </div>
      <div className="logo1">
        <img src={require("../assets/Images/logo1.png")} alt="Ellipse" />
      </div>
      <div className="dot">
        <img src={require("../assets/Images/Group159.png")} alt="Ellipse" />
      </div>
      <div className="button">
        <a href="/AccountType">
          <Button className="buttonStyle">Continue</Button>
        </a>
      </div>
    </div>
  );
}

export default welcome