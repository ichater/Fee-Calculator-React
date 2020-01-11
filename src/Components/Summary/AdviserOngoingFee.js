import React from "react";

const AdviserOngoingFee = props => {
  const {
    adviserOngoingFee$,
    adviserOngoingFeeP,
    adviserOngoingFeeIncrease,
    cpi
  } = props;
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
