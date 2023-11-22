import React from "react";
import "../style/Home.css";
import {Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="heading">
        <p>Home</p>
      </div>
      <div className="page-view">
        <div className="cards">
          <Card className="application-details">
            <Card.Body>
              <div className="top-text">
                <div className="left">
                  <p className="total-application">Total Application Count</p>
                  <p className="total-application-no">04</p>
                </div>
                <div className="right">
                  <p className="approve-loan">Approved Loan App Count</p>
                  <p className="approve-loan-no">03</p>
                </div>
              </div>
              <div className="bottom-text">
                <div className="">
                  <p className="total-disburse">Total Disbursed Amount</p>
                </div>
                <div className="right">
                  <p className="total-disburse-amt">1,000,098 RS</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="page-view-list">
        <div className="list">
          <Card className="app">
            <Card.Body>
              <div className="application-list">
                <div className="left-icon">
                  <Link to="/AppAllocation">
                    <img
                      src={require("../assets/Images/Wallet.png")}
                      alt="wallet"
                    />
                  </Link>
                  <p className="app-list">
                    Application
                    <span> List </span>
                  </p>
                </div>
                <div className="right-icon">
                  <Link to="/AppAllocation">
                    <img
                      src={require("../assets/Images/Document.png")}
                      alt="wallet"
                    />
                  </Link>

                  <p className="app-status">
                    Application
                    <span> Status </span>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="page-view-create-app">
        <div className="Create-application">
          <Card className="loan-app">
            <Card.Body>
              <div className="card-heading">
                <div className="card-data">
                  <p className="card-head">Create Application</p>
                  <p className="card-content">Create loan Application lead </p>
                </div>
                <div className="card-image">
                  <img
                    src={require("../assets/Images/gold loan.png")}
                    alt="gold"
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="page-view-allocated-app">
        <div className="allocated-application">
          <Card className="loan-app">
            <Card.Body>
              <div className="card-heading">
                <div className="card-data">
                  <p className="card-head">Allocated Application</p>
                  <p className="card-content">
                    You can check the allocated application near by
                  </p>
                </div>
                <div className="card-image2">
                  <img
                    src={require("../assets/Images/Ellipse2.png")}
                    alt="Ellipse"
                  />
                  <div className="card-image3">
                    <img
                      src={require("../assets/Images/Ellipse4.png")}
                      alt="Ellipse"
                    />
                  </div>
                  <div className="card-image4">
                    <img
                      src={require("../assets/Images/Group4.png")}
                      alt="Ellipse"
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
