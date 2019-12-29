import React, { useState } from "react";
import AdviserDetails2Expanded2 from "./AdviserDetails2Expanded2";

const AdviserDetails2Expanded = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      {" "}
      <div className="AdviserDetails1Expanded__grid">
        <div>
          <input type="checkbox"></input>
          <labal>Dollar based Fee</labal>
        </div>
        <div>
          <span>$</span>
          <input type="number"></input>
        </div>

        <div>Increase my $ based fee per year</div>
        <div>
          <input
            name="increasefee"
            type="radio"
            for="increase-yes"
            onClick={() => setShowText(true)}
          ></input>
          <label id="increase-yes">Yes</label>
          <input
            name="increasefee"
            type="radio"
            id="increase-no"
            onClick={() => setShowText(false)}
          ></input>{" "}
          <label for="increase-no">no</label>
        </div>
        {showText && (
          <div>
            <AdviserDetails2Expanded2 />
          </div>
        )}

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
    </>
  );
};

export default AdviserDetails2Expanded;
