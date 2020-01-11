import React from "react";

const AdviserInitialFee = ({ adviserInitialFee$, adviserInitialFeeP }) => {
  return (
    <div className="AdviserInitialFee-summary">
      <div>{adviserInitialFee$}</div>
      <div>{adviserInitialFeeP}</div>
    </div>
  );
};

export default AdviserInitialFee;
