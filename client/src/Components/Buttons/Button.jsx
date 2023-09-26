import React from "react";

import "./buttons.css";

const Button = ({ children, type }) => {
  return (
    <button className="action-btn" type={type}>
      {children}
    </button>
  );
};

export default Button;
