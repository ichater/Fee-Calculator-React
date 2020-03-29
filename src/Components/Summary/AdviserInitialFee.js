import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";
import { MainPageContext } from "./../../Context/MainPageContext";

const AdviserInitialFee = () => {
  const { adviserInitialFee$, adviserInitialFeeP } = useContext(
    SummaryDetailsContext
  );
  const { balance } = useContext(MainPageContext);
  return (
    <div className="AdviserInitialFee-summary">
      <div>
        {adviserInitialFee$ && (
          <span> Adviser Initial Service Fee: ${adviserInitialFee$}</span>
        )}
      </div>

      <div>
        {!!adviserInitialFeeP && (
          <span>
            {" "}
            Adviser Initial Service Fee: {adviserInitialFeeP}%($
            {(balance / 100) * adviserInitialFeeP})
          </span>
        )}
      </div>
    </div>
  );
};

export default AdviserInitialFee;
