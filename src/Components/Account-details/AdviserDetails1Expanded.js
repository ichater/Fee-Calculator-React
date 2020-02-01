import React, { useState } from "react";

const AdviserDetails1Expanded = ({
  setAdviserInitialFee$,
  setAdviserInitialFeeP,
  adviserInitialFee$,
  adviserInitialFeeP,
  showText2,
  setShowText2,
  showText3,
  setShowText3
}) => {
  return (
    <div className="AdviserDetails1Expanded__grid">
      <div>
        <input
          type="checkbox"
          onChange={e => {
            if (e.target.checked === true) {
              setShowText2(true);
            } else {
              setShowText2(false);
            }
          }}
        ></input>
        <labal>Dollar based Fee</labal>
      </div>
      {showText2 && (
        <div>
          <span>$</span>
          <input
            type="number"
            onChange={e => setAdviserInitialFee$("$" + e.target.value)}
            value={adviserInitialFee$}
          ></input>
        </div>
      )}
      <div className="AdviserDetails1Expanded__grid-ANDOR">AND/OR</div>
      <div>
        <input
          type="checkbox"
          onChange={e => {
            if (e.target.checked === true) {
              setShowText3(true);
            } else {
              setShowText3(false);
            }
          }}
        ></input>
        <labal>Persentage based Fee</labal>
      </div>
      {showText3 && (
        <div>
          <span>%</span>
          <input
            type="number"
            onChange={e => setAdviserInitialFeeP(e.target.value + "%")}
            value={adviserInitialFeeP}
          ></input>
        </div>
      )}
    </div>
  );
};

export default AdviserDetails1Expanded;
