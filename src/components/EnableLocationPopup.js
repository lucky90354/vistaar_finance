import React from 'react';
import "../style/EnableLocation.css";
function EnableLocationPopup({ yesClose, onClose }) {
  
  const handleYesClick = () => {
    // Get user's location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User's location:", { latitude, longitude });
          yesClose();
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="enablelocation">
      <h3>
        <center>Enable Location</center>
      </h3>
      <div className="popup-content">
        <p>
          Please Verify you've switched location to "On" Also, set your Location
          Mode to High Accuracy
        </p>
        <button className="yesbutton" onClick={handleYesClick}>
          Yes
        </button>
        <button className="closebutton" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default EnableLocationPopup;
