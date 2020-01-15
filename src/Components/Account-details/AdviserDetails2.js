import React, { useState } from "react";
import AdviserDetails2Expanded from "./AdviserDetails2Expanded";

const AdviserDetails2 = props => {
  const {
    setAdviserOngoingFee$,
    setAdviserOngoingFeeP,
    setadviserOngoingFeeIncrease,
    setCpi
  } = props;
  const [showText, setShowText] = useState(false);
  return (
    <div className="DetailsPage-positioning">
      <form>
        <label for="yes-fee2">Yes</label>
        <input
          type="radio"
          name="fee2"
          id="yes-fee2"
          onClick={() => setShowText(true)}
        ></input>
        <label for="no-fee2">No</label>
        <input
          type="radio"
          name="fee2"
          id="no-fee2"
          onClick={() => setShowText(false)}
        ></input>
      </form>
      {/* {showText && ( */}
      <AdviserDetails2Expanded
        setAdviserOngoingFee$={setAdviserOngoingFee$}
        setAdviserOngoingFeeP={setAdviserOngoingFeeP}
        setadviserOngoingFeeIncrease={setadviserOngoingFeeIncrease}
        setCpi={setCpi}
      />
      {/* )} */}
    </div>
  );
};

export default AdviserDetails2;
