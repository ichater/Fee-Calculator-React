import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const AdviserInitialFee = () => {
  const { adviserInitialFee$, adviserInitialFeeP } = useContext(
    SummaryDetailsContext
  );
  return (
    <div className="AdviserInitialFee-summary">
      <div>
        {false && adviserInitialFee$ && (
          <span> Adviser Initial Service Fee: ${adviserInitialFee$}</span>
        )}
      </div>

      <div>
        {!!adviserInitialFeeP && (
          <span> Adviser Initial Service Fee: {adviserInitialFeeP}%</span>
        )}
      </div>
    </div>
  );
};

export default AdviserInitialFee;
