import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const AdviserDetails1Expanded = () => {
  const {
    setAdviserInitialFee$,
    setAdviserInitialFeeP,
    adviserInitialFee$,
    adviserInitialFeeP,
    showText2,
    setShowText2,
    showText3,
    setShowText3
  } = useContext(SummaryDetailsContext);
  return (
    <div className="AdviserDetails1Expanded__grid">
      <div>
        <label>
          <input
            className="Main-Page-Checkbox"
            type="checkbox"
            onChange={e => {
              if (e.target.checked === true) {
                setShowText2(true);
              } else {
                setShowText2(false);
              }
            }}
          ></input>
          Dollar based Fee
        </label>
      </div>
      {showText2 && (
        <div>
          <span>$</span>
          <input
            type="number"
            value={adviserInitialFee$}
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
            onChange={e => setAdviserInitialFeeP(e.target.value)}
            value={adviserInitialFeeP}
          ></input>
        </div>
      )}
    </div>
  );
};

export default AdviserDetails1Expanded;
