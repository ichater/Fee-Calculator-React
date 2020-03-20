import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";
const AdviserOngoingFee = () => {
  const {
    adviserOngoingFee$,
    adviserOngoingFeeP,
    adviserOngoingFeeIncrease,
    cpi
  } = useContext(SummaryDetailsContext);
  return (
    <>
      <div>{adviserOngoingFee$}</div>
      {adviserOngoingFeeP}
      <div>{adviserOngoingFeeIncrease}</div>
      {cpi && <p>Increased by CPI per year</p>}
      <div>{adviserOngoingFeeP}</div>
    </>
  );
};

export default AdviserOngoingFee;
