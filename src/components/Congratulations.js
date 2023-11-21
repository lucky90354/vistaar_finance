import React from 'react';
import "../style/Congratulations.css";
import {Button} from "react-bootstrap";
import congratulationsGif from "../assets/Images/congratulations.gif";

const Congratulations = () => {
  return (
    <div>
      <div className="title-gif">
        <div className="Congratulations_Gif">
          <img src={congratulationsGif} alt="Congratulations" />
        </div>
      </div>
      <div className="congratulations-title">
        <p>Congratulations</p>
      </div>
      <div className="completion-msg">
        <p>
          Application : <span className="creation-id">APP17805225536</span>{" "}
          Creation completed
        </p>
      </div>
     
      <div className="home-Button">
        <a href="/Home">
          <Button className="homebuttonstyle">Home</Button>
        </a>
      </div>
    </div>
  );
}

export default Congratulations
