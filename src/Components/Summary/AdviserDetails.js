import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const AdviserDetails = () => {
  const { adviserName, adviserCode, dealerGroup } = useContext(
    SummaryDetailsContext
  );
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
