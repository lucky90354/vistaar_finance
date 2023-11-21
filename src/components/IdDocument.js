import React from 'react';
import "../style/IdDocument.css";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import PreviousButton from "../assets/Images/ChevronLeftOutline.png";
import CustomerImage from "../assets/Images/Humanprofile_TwoColor.png";
import GeoTagging from "../assets/Images/geoloaction.png";

function IdDocument() {
  return (
    <div>
      <div className="previous-button">
        <Link className="previous-link" to="/OrderTracking">
          <img
            src={PreviousButton}
            alt="privious-page-button"
            className="previousbutton"
          />
        </Link>
      </div>
      <div className="page-title">Identity Document</div>
      <div className="title-image">
        <div className="humanprofile">
          <img src={CustomerImage} alt="HumanProfile" />
        </div>
      </div>
      <div className="page-main-title">Personal Details </div>
      <div className="page-tag-line">Enter Customer Personal Details</div>
      <div className="form-data">
        <div className="name-tag">
          <div className="first-name">
            <p className="placehoder-tag">First Name</p>
            <p className="placeholder-name">Sukhwinder </p>
          </div>
          <div className="last-name">
            <p className="placehoder-tag">Last Name</p>
            <p className="placeholder-name">Singh </p>
          </div>
        </div>
        <div className="email-tag">
          <div className="email-id">
            <p className="placehoder-tag">Email ID</p>
            <p className="placeholder-name">sukhwindersingharmy85@gmail.com </p>
          </div>
        </div>
        <div className="phone-tag">
          <div className="phone-number">
            <p className="placehoder-phone-tag">+91</p>
            <p className="placeholder-phone-name">9781296104</p>
          </div>
        </div>
        <div className="address-tag">
          <div className="sector-name">
            <select className="sectorLocation">
              <option id="dropdown-options" value="l1">
                In Around 2KM
              </option>
              <option id="dropdown-options" value="l2">
                In Around 4KM
              </option>
              <option id="dropdown-options" value="l3">
                In Around 6KM
              </option>
            </select>
          </div>
          <div className="subsector-name">
            <select className="subSectorLocation">
              <option id="dropdown-options" value="l1">
                In Around 2KM
              </option>
              <option id="dropdown-options" value="l2">
                In Around 4KM
              </option>
              <option id="dropdown-options" value="l3">
                In Around 6KM
              </option>
            </select>
          </div>
        </div>
        <div className="location-tag">
          <div className="pin-code">
            <p className="placehoder-tag">PIN Code</p>
            <p className="placeholder-name">120022 </p>
          </div>
          <div className="geo-tag">
            <div className="geo-image">
              <p className="placehoder-tag">GEO Taging</p>
              <img
                src={GeoTagging}
                alt="Geo_Location_Image"
                className="geotaggingimage"
              />
            </div>
            <p className="placeholder-name">18.5284° N, 73.8739° E</p>
          </div>
        </div>
        <div className="next-page-button">
          <a href="/PanVerification">
            <Button className="nextpageButtonStyle">Continue</Button>
          </a>
        </div>
        <div className="do-it-later-link">
          <Link className="doitlaterlink" to="/PanVerification">
            <p className="doitlaterlink">Do this Later</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IdDocument;