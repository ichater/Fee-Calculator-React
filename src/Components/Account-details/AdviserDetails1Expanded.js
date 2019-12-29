import React from "react";

const AdviserDetails1Expanded = () => {
  return (
    <div className="AdviserDetails1Expanded__grid">
      <div>
        <input type="checkbox"></input>
        <labal>Dollar based Fee</labal>
      </div>
      <div>
        <span>$</span>
        <input type="number"></input>
      </div>
      <div className="AdviserDetails1Expanded__grid-ANDOR">AND/OR</div>
      <div>
        <input type="checkbox"></input>
        <labal>persentage based Fee</labal>
      </div>
      <div>
        <span>%</span>
        <input type="number"></input>
      </div>
    </div>
  );
};

export default AdviserDetails1Expanded;
