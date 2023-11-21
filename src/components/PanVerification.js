import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/PanVerification.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";
import PreviousButton from "../assets/Images/ChevronLeftOutline.png";
import Profiling_TwoColor from "../assets/Images/Profiling_TwoColor.png";


const PanVerification = () => {
    const [dob, setDob] = useState(null);
  return (
    <div>
      <div className="previous-button1">
        <Link className="previous-link1" to="/appallocation">
          <img
            src={PreviousButton}
            alt="privious-page-button"
            className="previousbutton1"
          />
        </Link>
      </div>
      <div className="page-title1">PAN Verifycation </div>
      <div className="title-image1">
        <div className="Profiling_TwoColor">
          <img src={Profiling_TwoColor} alt="Profiling_TwoColor" />
        </div>
      </div>
      <div className="page-main-title1">Identification Number </div>
      <div className="page-tag-line1">
        <p className="tagline">
          For the purpose of industry regulation, your details are required.
        </p>
      </div>
      <div className="form-data">
        <div className="adhaarcard-tag">
          <div className="adhaarcard-id">
            <p className="placehoder1-tag">Aadhaar</p>
            <p className="placeholder1-name">6272 - 9644 - 9490</p>
          </div>
        </div>
        <div className="pan-tag">
          <div className="pan-number">
            <p className="placehoder1-tag">PAN Number</p>
            <p className="placeholder1-name">GAMPS1213R</p>
          </div>
        </div>
        <div className="geneder-dob-tag">
          <div className="gender-name">
            <p className="placehoder1-tag">Gender</p>
            <p className="placeholder1-name">Male </p>
          </div>
          <div className="dob-name">
            <div className="dob-date">
              <p className="placehoder1-tag">DOB</p>
              <DatePicker
                selected={dob}
                onChange={(date) => setDob(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
                className="placeholder-dob"
              />
            </div>
          </div>
        </div>

        <div className="next-page-button1">
          <a href="/Congratulations">
            <Button className="nextpageButtonStyle1">Continue</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PanVerification
