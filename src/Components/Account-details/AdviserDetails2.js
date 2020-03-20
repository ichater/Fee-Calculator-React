import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";
import AdviserDetails2Expanded from "./AdviserDetails2Expanded";
const AdviserDetails2 = () => {
  const {
    showText,
    setShowText,
    setAdviserOngoingFee$,
    setAdviserOngoingFeeP,
    setadviserOngoingFeeIncrease,
    setCpi
  } = useContext(SummaryDetailsContext);

  return (
    <div className="DetailsPage-positioning">
      <form>
        <label for="yes-fee2">Yes</label>
        <input
          type="radio"
          name="fee2"
          id="yes-fee2"
          onClick={() => setShowText(true)}
          checked={setShowText(true)}
        ></input>
        <label for="no-fee2">No</label>
        <input
          type="radio"
          name="fee2"
          id="no-fee2"
          onClick={() => setShowText(false)}
          checked={setShowText}
        ></input>
      </form>
      {showText && (
        <AdviserDetails2Expanded
          setAdviserOngoingFee$={setAdviserOngoingFee$}
          setAdviserOngoingFeeP={setAdviserOngoingFeeP}
          setadviserOngoingFeeIncrease={setadviserOngoingFeeIncrease}
          setCpi={setCpi}
        />
      )}
    </div>
  );
};

export default AdviserDetails2;
