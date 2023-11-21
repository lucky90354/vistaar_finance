import React, { useState } from "react"; // Import useState
import "../style/OrderTracking.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import ManagerImage from "../assets/Images/Rectangle327.png";
import phoneIcon from "../assets/Images/call1.png";
import LocationIcon from "../assets/Images/Group3329.png";
import TimeIcon from "../assets/Images/Group33291.png";

const containerStyle = {
  width: "380px",
  height: "250px",
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        backgroundColor: "#ffffff", // Set the background color to white
      },
    ],
  },
];

const center = {
  lat: -3.745,
  lng: -38.523,
};

const managersData = [{ name: "SUKHWINDER SINGH", distance: "2KM" }];

function RelationshipManager({ index, name, distance }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="manager-details" onClick={toggleDrawer}>
      <div className="heading-navigation">
        <p>Navigation</p>
      </div>
      <div className="card-details">
        <div className="allocator-image">
          <img src={ManagerImage} alt="ManagerImage" className="image-icon" />
        </div>
        <div className="name">
          <div className="manager-name">SUKHWINDER SINGH</div>
          <div className="application-id1">APP1780522553668197</div>
        </div>
        <div className="phone1">
          <img src={phoneIcon} alt="phone-icon" className="phone-icon1" />
        </div>
      </div>
      <div className="border-bottom-line"></div>
      <div className="communication1">
        <div className="customer-address">
          <div className="customer-data">
            <div className="icon">
              <img src={LocationIcon} alt="phone-icon" className="loc-icon" />
            </div>
            <div className="locat-details">
              <div className="customer-add">Customer Address</div>
              <div className="add-deatils">
                <p>S-909, Sushant Lok, Sector 43, Pune </p>
              </div>
            </div>
          </div>
        </div>
        <div className="arrival-time">
          <div className="icon1">
            <img src={TimeIcon} alt="phone-icon" className="time-icon" />
          </div>
          <div className="time-heading">
            <div className="arrival-time-heading">Arrival Time</div>
            <div className="reach-time">03:00PM (Max 20 min)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderTracking() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <div className="container">
        <div className="top-bar1">
          <div className="back-button">
            <Link className="back-link" to="/Home">
              <img
                src={require("../assets/Images/ChevronLeftOutline.png")}
                alt="Back"
              />
            </Link>
          </div>
        </div>
        <div className="map-style">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            styles={mapStyles}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </div>
      </div>
      <div className="relationship-managers">
        <div className="manager-relation-ship1">
          <Card className="managers-full-deatils">
            <Card.Body>
              {managersData.map((manager, index) => (
                <RelationshipManager
                  key={index}
                  index={index}
                  name={manager.name}
                  distance={manager.distance}
                />
              ))}
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="connect-ordertracking">
        <Link to="/IdDocument" className="order-hiperlink-style">
          <Button className="connect-order-tracking">Connect</Button>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default OrderTracking;
