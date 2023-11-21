import React, { useState } from "react"; // Import useState
import "../style/AppAllocation.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import locationIcon from "../assets/Images/LocationMarker.png";
import ManagerImage from "../assets/Images/Ellipse112.png";
import phoneIcon from "../assets/Images/Call.png";
import location1Icon from "../assets/Images/Vector.png";

const mapStyles1 = [
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

const containerStyle = {
  width: "380px",
  height: "250px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const managersData = [
  { name: "Deepak Kumar", distance: "2KM", appid: "APP1780522553668654" },
  { name: "Ajinkya Yjare", distance: "3KM", appid: "APP17805225536687876"},
  { name: "Omkar Kulkurani", distance: "4KM", appid: "APP1780522553668386"},
  { name: "Rajat Singh", distance: "3KM", appid: "APP1780522553668938"},
];

function RelationshipManager({ index, name, distance, appid }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="manager" onClick={toggleDrawer}>
      <div className="list-view">
        <div className="id-name">
          <p className="id">{index + 1}</p>
          <p className="name">{name}</p>
        </div>
        <div className="distance-km">
          <p className="location">
            <img src={locationIcon} alt="Location" className="location-icon" />
          </p>
          <p className="distance">{distance}</p>
        </div>
      </div>
      <div className="application-id">
        <p className="app-id">{appid}</p>
      </div>
      {isDrawerOpen && (
        <div className="drawer">
          <div className="border-line"></div>
          <div className="manager-info">
            <p>
              <img
                src={ManagerImage}
                alt="ManagerImage"
                className="image-icon"
              />
            </p>
            <p className="resume-app">
              <Link className="resume-link" to="/Home">
                Resume Application
              </Link>
            </p>
          </div>
          <div className="communication">
            <p className="phone">
              <img src={phoneIcon} alt="phone-icon" className="phone-icon" />
            </p>
            <p className="message">
              <Link className="message-link" to="/Home">
                Send message
              </Link>
            </p>
            <div className="address">
              <img src={location1Icon} alt="address" className="address-icon" />
              <p className="address-map">Map</p>
            </div>
          </div>
          <div className="border-bottom"></div>
        </div>
      )}
    </div>
  );
}

function AppAllocation() {
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
      <div className="top-bar">
        <div className="back-button">
          <Link className="back-link" to="/Home">
            <img
              src={require("../assets/Images/ChevronLeftOutline.png")}
              alt="Back"
            />
          </Link>
        </div>
        <div className="drop-down">
          <select id="locationDropdown">
            <option className="dropdown-container" value="l1">
              In Around 2KM
            </option>
            <option className="dropdown-container" value="l2">
              In Around 4KM
            </option>
            <option className="dropdown-container" value="l3">
              In Around 6KM
            </option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="map-style1">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            styles={mapStyles1}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </div>
      </div>
      <div className="relationship-managers">
        <div className="app-allocation">
          <Card className="card-deatils">
            <Card.Body>
              <div className="card-heading1">
                <div className="card-data1">
                  <p className="card-head1">Application Allocation </p>
                  <p className="card-content1">Lead Near you in around 2KM</p>
                </div>
                <div className="card-content2">
                  <p className="content2-data">04</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="manager-relation-ship">
          <Card className="managers-deatils">
            <Card.Body>
              {managersData.map((manager, index) => (
                <RelationshipManager
                  className="manager-id-name"
                  key={index}
                  index={index}
                  name={manager.name}
                  distance={manager.distance}
                  appid={manager.appid}
                />
              ))}
            </Card.Body>
          </Card>
        </div>
        <div className="connect-allocation">
          <Link to="/OrderTracking" className="hiperlink-style">
            <Button className="connect-app-alloc">Connect</Button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default AppAllocation;
