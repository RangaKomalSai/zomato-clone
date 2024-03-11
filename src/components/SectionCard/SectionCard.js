import React from "react";
import "./SectionCard.css";

const SectionCard = ({ image, heading, subHeading }) => {
  return (
    <div className="sectionCard">
      <img src={image} />
      <div className="sectionCard-text">
        <div className="heading">{heading}</div>
        <div className="subHeading">{subHeading}</div>
      </div>
    </div>
  );
};

export default SectionCard;
