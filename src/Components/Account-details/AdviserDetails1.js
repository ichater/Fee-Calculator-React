import React, { useState } from "react";
import AdviserDetails1Expanded from "./AdviserDetails1Expanded";

const AdviserDetails1 = props => {
  const {
    setAdviserInitialFee$,
    setAdviserInitialFeeP,
    adviserInitialFee$,
    adviserInitialFeeP,
    setShowText1,
    showText1,
    showText2,
    setShowText2,
    showText3,
    setShowText3
  } = props;
  // const [showText1, setShowText1] = useState(false);
  return (
    <div className="DetailsPage-positioning">
      <form>
        <label for="yes-fee1">Yes</label>
        <input
          type="radio"
          name="fee1"
          id="yes-fee1"
          onClick={() => setShowText1(true)}
          // checked={setShowText1}
        ></input>
        <label for="no-fee1">No</label>
        <input
          type="radio"
          name="fee1"
          id="no-fee1"
          onClick={() => setShowText1(false)}
          // checked={setShowText1}
        ></input>
      </form>
      {showText1 && (
        <div>
          <AdviserDetails1Expanded
            setAdviserInitialFee$={setAdviserInitialFee$}
            setAdviserInitialFeeP={setAdviserInitialFeeP}
            adviserInitialFee$={adviserInitialFee$}
            adviserInitialFeeP={adviserInitialFeeP}
            showText2={showText2}
            setShowText2={setShowText2}
            showText3={showText3}
            setShowText3={setShowText3}
          />
        </div>
      )}
    </div>
  );
};

export default AdviserDetails1;
