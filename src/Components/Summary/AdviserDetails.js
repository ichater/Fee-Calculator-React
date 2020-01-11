import React from "react";

const AdviserDetails = props => {
  const { adviserName, adviserCode, dealerGroup } = props;
  return (
    <div className="Details-grid">
      {" "}
      <span>Adviser name:</span>
      {adviserName}
      <span>Code:</span>
      {adviserCode}
      <span>Dealer Group:</span>
      {dealerGroup}
    </div>
  );
};

export default AdviserDetails;
