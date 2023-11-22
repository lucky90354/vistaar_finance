import React, { useState } from "react";
import { FaThLarge, FaAccessibleIcon } from "react-icons/fa";
import {
  MdOutlineReceipt,
  MdDomainVerification,
} from "react-icons/md";
import { IoMdWallet, IoMdPower } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
import EnableLocationPopup from "./EnableLocationPopup";


const ICON_SIZE = 15;

function Navbar({visible, show}) {

  const [isEnableLocationPopupVisible, setEnableLocationPopupVisible] =
    useState(false);

  const openEnableLocationPopup = () => {
    setEnableLocationPopupVisible(true);
  };

  const closeEnableLocationPopup = () => {
    setEnableLocationPopupVisible(false);
  };

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

            <NavLink to="/AppAllocation" className="nav-link">
              <MdOutlineReceipt size={ICON_SIZE} />
              <span>Application</span>
            </NavLink>

            <NavLink to="#" className="nav-link">
              <IoMdWallet size={ICON_SIZE} />
              <span>Commission Earned</span>
            </NavLink>

            <NavLink
              to="EnableLocation"
              className="nav-link"
              onClick={openEnableLocationPopup}
            >
              <FaAccessibleIcon size={ICON_SIZE} />
              <span>Enable GPS</span>
            </NavLink>
            {isEnableLocationPopupVisible && (
              <EnableLocationPopup onClose={closeEnableLocationPopup} />
            )}

            <NavLink to="#" className="nav-link">
              <IoDocumentTextOutline size={ICON_SIZE} />
              <span>Profile</span>
            </NavLink>
            <NavLink to="#" className="nav-link">
              <MdDomainVerification size={ICON_SIZE} />
              <span>Settings </span>
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
