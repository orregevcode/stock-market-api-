import React from "react";
import "./Iphone.scss";
import Stockmarket from "./Stockmarket";
import { FaBatteryThreeQuarters } from "react-icons/fa";
function Iphone() {
  return (
    <div className="warrper">
      <div className="outside-border">
        <div className="silencer"></div>
        <div className="volume-up"></div>
        <div className="volume-down"></div>
        <div className="button-on"></div>
        <div className="inside-boarder">
          <div className="camera">
            <div className="camera-dot">
              <div className="camera-dot-2"></div>
              <div className="camera-dot-3"></div>
            </div>
            <div class="camera-speaker"></div>
          </div>
          <div className="t-r-info">
            <div className="dots">...</div>
            <div className="battery-icon">
              <FaBatteryThreeQuarters
                size="1rem"
                display="flex"
                align-self="center"
                justify-content="center"
              />
            </div>
          </div>

          <Stockmarket />
        </div>
      </div>
    </div>
  );
}

export default Iphone;
