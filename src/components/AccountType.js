import React, {useState, useEffect} from "react";
import "../style/AccountType.css";
import Button from "react-bootstrap/button";

function AccountType() {
  
  const [timer, setTimer] = useState(180); // 180 seconds = 3 minutes
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setMinutes(Math.floor(timer / 60));
        setSeconds(timer % 60);
      } else {
        clearInterval(countdown);
        // Handle timer expiration here (e.g., resend OTP or show a message)
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(countdown);
  }, [timer]);

  return (
    <div className="main-image">
      <div className="mobile">
        <img
          src={require("../assets/Images/Mobile Phone_Monochromatic2.png")}
          alt="Ellipse"
        />
      </div>
      <div className="login-heading">
        <p>Agent Login</p>
        <p className="login-sub-heading">Are you new with Viataar Finace ?</p>
      </div>
      <div className="mobile-no">
        <input
          type="text"
          pattern="[0-9]*"
          className="mobileinput"
          placeholder="Enter Mobile Number"
          maxLength="13"
          title="Please enter only numbers"
        />
        <a href="#">
          <Button className="buttonStyle1">OTP</Button>
        </a>
      </div>
      <div className="otp-section">
        <div className="otp-heading">
          <p>Kindly enter the code to continue.</p>
        </div>
        <div className="otp-input-row">
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
          <input type="text" maxLength="1" className="otp-box" />
        </div>
        <div className="resend-text-container">
          <p className="resend-text">Resend OTP: </p>
          <p className="resend-timer">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
      </div>
      <div className="button1">
        <a href="/Home">
          <Button className="buttonStyle2">Login</Button>
        </a>
      </div>
    </div>
  );
}

export default AccountType;
