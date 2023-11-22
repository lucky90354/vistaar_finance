import React, { useState, useEffect } from "react"; // Import useState
import "../style/AppAllocation.css";
import { Link } from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import locationIcon from "../assets/Images/LocationMarker.png";
import ManagerImage from "../assets/Images/Ellipse112.png";
import phoneIcon from "../assets/Images/Call.png";
import location1Icon from "../assets/Images/Vector.png";
import MapImage from "../assets/Images/map.jpeg";

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
              <Link className="resume-link" to="/Panverification">
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
    googleMapsApiKey: "3d0717dbdbmshcb56a440d46825bp19b179jsneff730eebbec", // Replace with your API key
  });

  const [map, setMap] = React.useState(null);
  const [directions, setDirections] = useState(null);

  // Define the options object for Axios request
  const options = {
    method: "GET",
    url: "https://driving-directions1.p.rapidapi.com/get-directions",
    params: {
      origin: "Church St & 29th St, San-Francisco, CA, USA",
      destination: "Sunnyvale, CA, USA",
      avoid_routes: "tolls,ferries",
      country: "us",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "3d0717dbdbmshcb56a440d46825bp19b179jsneff730eebbec",
      "X-RapidAPI-Host": "driving-directions1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    // Fetch driving directions when the component mounts
    const fetchDirections = async () => {
      try {
        const response = await axios.request(options); // Use the options from your original code
        setDirections(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDirections();
  }, []); // Run this effect only once when the component mounts

  const onLoad = React.useCallback(
    function callback(map) {
      if (directions) {
        // Use the coordinates from the directions API response to set the map center
        const center = {
          lat: directions.origin.lat,
          lng: directions.origin.lng,
        };

        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
      }
    },
    [directions]
  );

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
          {/* <GoogleMap
            mapContainerStyle={containerStyle}
            center={directions ? directions.origin : center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            styles={mapStyles1}
          >
            <></>
          </GoogleMap> */}
          <img
            src={MapImage}
            alt="Map"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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
            <Card.Body ClassName="card-body">
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
              <div className="connect-allocation">
                <Link to="/OrderTracking" className="hiperlink-style">
                  <Button className="connect-app-alloc">Connect</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default AppAllocation;
