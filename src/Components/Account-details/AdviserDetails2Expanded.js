import React, { useState } from "react";
import AdviserDetails2Expanded2 from "./AdviserDetails2Expanded2";

const AdviserDetails2Expanded = () => {
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  return (
    <>
      {" "}
      <div className="AdviserDetails1Expanded__grid">
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
          />
          <labal>Dollar based Fee</labal>
        </div>
        {showText1 && (
          <>
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
                checked="checked"
                onClick={() => setShowText(false)}
              ></input>{" "}
              <label for="increase-no">no</label>
            </div>
            {showText && (
              <div>
                <AdviserDetails2Expanded2 />
              </div>
            )}
          </>
        )}

        <div className="AdviserDetails1Expanded__grid-ANDOR">AND/OR</div>
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
          <labal>percentage based Fee</labal>
        </div>
        {showText2 && (
          <div>
            <span>%</span>
            <input type="number"></input>
          </div>
        )}
      </div>
    </>
  );
};

export default AdviserDetails2Expanded;
