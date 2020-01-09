import React, { useState } from "react";

const AdviserDetails1Expanded = ({
  setAdviserInitialFee$,
  setAdviserInitialFeeP
}) => {
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  return (
    <div className="AdviserDetails1Expanded__grid">
      <div>
        <input
          type="checkbox"
          onChange={e => {
            if (e.target.checked === true) {
              setShowText(true);
            } else {
              setShowText(false);
            }
          }}
        ></input>
        <labal>Dollar based Fee</labal>
      </div>
      {showText && (
        <div>
          <span>$</span>
          <input
            type="number"
            onChange={e => setAdviserInitialFee$(e.target.value)}
          ></input>
        </div>
      )}
      <div className="AdviserDetails1Expanded__grid-ANDOR">AND/OR</div>
      <div>
        <input
          type="checkbox"
          onChange={e => {
            if (e.target.checked === true) {
              setShowText1(true);
            } else {
              setShowText1(false);
            }
          }}
        ></input>
        <labal>Persentage based Fee</labal>
      </div>
      {showText1 && (
        <div>
          <span>%</span>
          <input
            type="number"
            onChange={e => setAdviserInitialFeeP(e.target.value)}
          ></input>
        </div>
      )}
    </div>
  );
};

export default AdviserDetails1Expanded;
