import React, { useState } from "react";
import AdviserDetails1Expanded from "./AdviserDetails1Expanded";

const AdviserDetails1 = ({ setAdviserInitialFee$, setAdviserInitialFeeP }) => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <h2>Adviser Initial Service Fee</h2>
      <form>
        <label for="yes-fee1">Yes</label>
        <input
          type="radio"
          name="fee1"
          id="yes-fee1"
          onClick={() => setShowText(true)}
        ></input>
        <label for="no-fee1">No</label>
        <input
          type="radio"
          name="fee1"
          id="no-fee1"
          onClick={() => setShowText(false)}
        ></input>
      </form>
      {showText && (
        <div>
          <AdviserDetails1Expanded
            setAdviserInitialFee$={setAdviserInitialFee$}
            setAdviserInitialFeeP={setAdviserInitialFeeP}
          />
        </div>
      )}
    </>
  );
};

export default AdviserDetails1;
