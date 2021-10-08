import React from "react";
import "./Option.css";
const Option = ({ Icon, label }) => {
  return (
    <div className="option">
      <div className="option__item">
        <Icon className="option__itemIcon" />
        <span>{label}</span>
      </div>
    </div>
  );
};

export default Option;
