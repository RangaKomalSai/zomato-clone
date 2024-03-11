import React from "react";
import "./LocationCard.css";

const LocationCard = ({ name, number }) => {
  return (
    <div className="locationCard">
      <div className="flex">
        <div className="locationCard-name">{name}</div>
        <div className="locationCard-number">{number} places</div>
      </div>
      <div className="locationCard-icon">
        <i class="fi fi-rr-angle-small-right"></i>
      </div>
    </div>
  );
};

export default LocationCard;
