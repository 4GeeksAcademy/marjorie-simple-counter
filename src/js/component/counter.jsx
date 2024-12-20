import React from "react";

const Counter = ({ one, two, three, four, five, six }) => {
  return (
    <>
      <div className="container">
        <div className="tile clock-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="d-flex flex-row text-white fs-3">
          <span className="counter-digit">{six}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{five}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{four}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{three}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{two}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{one}</span>  
        </div>
      </div>
    </>
  );
};

export default Counter;