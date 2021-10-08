import React from "react";
import "./InputField.css";
const InputField = ({ label, placeholder, border, type = "text" }) => {
  return (
    <div className="inputField">
      <div className="inputField__item">
        <label htmlFor="">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className={`inputField__input ${!border && "inputField--option"}`}
        />
      </div>
    </div>
  );
};

export default InputField;
