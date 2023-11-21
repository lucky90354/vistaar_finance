import React from 'react';
import { FaThLarge, FaAccessibleIcon } from "react-icons/fa";
import {
  MdOutlineGpsFixed,
  MdOutlineReceipt,
  MdDomainVerification,
} from "react-icons/md";
import { IoMdWallet, IoMdPower } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const ICON_SIZE = 15;

function Navbar({visible, show}) {

	return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <img src={require("../assets/Images/sidebar.png")} alt="sidebar" />
        </button>
      </div>
      <nav className={!visible ? "navbar" : ""}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => show(!visible)}
        >
          {!visible ? (
            <img src={require("../assets/Images/sidebar.png")} />
          ) : (
            <img src={require("../assets/Images/sidebar.png")} />
          )}
        </button>
        <div>
          <NavLink className="logo" to="/Welcome">
            <img src={require("../assets/Images/logo.png")} alt="logo" />
          </NavLink>
          <div className="links nav-top">
            <NavLink to="/Home" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Home</span>
            </NavLink>

            <NavLink to="/AccountType" className="nav-link">
              <MdOutlineReceipt size={ICON_SIZE} />
              <span>Account Type </span>
            </NavLink>

            <NavLink to="/AppAllocation" className="nav-link">
              <IoMdWallet size={ICON_SIZE} />
              <span>Application Allocation</span>
            </NavLink>

            <NavLink to="/OrderTracking" className="nav-link">
              <FaAccessibleIcon size={ICON_SIZE} />
              <span>Order Tracking</span>
            </NavLink>

            <NavLink to="/IdDocument" className="nav-link">
              <IoDocumentTextOutline size={ICON_SIZE} />
              <span>Id Document</span>
            </NavLink>
            <NavLink to="/PanVerification" className="nav-link">
              <MdDomainVerification size={ICON_SIZE} />
              <span>Pan Verification</span>
            </NavLink>
            <NavLink to="/Congratulations" className="nav-link">
              <GiTrophyCup size={ICON_SIZE} />
              <span>Congratulations</span>
            </NavLink>
          </div>
        </div>
        <div className="links">
          <NavLink to="/Sign-out" className="logout">
            <IoMdPower size={ICON_SIZE} />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
