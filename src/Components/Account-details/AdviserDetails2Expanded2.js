import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const AdviserDetails2Expanded2 = ({ setadviserOngoingFeeIncrease, setCpi }) => {
  const { showPIncrease, setshowPIncrease } = useContext(SummaryDetailsContext);

  return (
    <>
      <div className="Two-fr-grid1">
        <label id="setshowPIncrease">
          <input
            name="setshowPIncrease"
            type="radio"
            for="setshowPIncrease"
            onChange={() => setshowPIncrease(true)}
          />
          Increase by %
        </label>
        {showPIncrease && (
          <>
            <input
              className="inline-input"
              type="number"
              onChange={e =>
                setadviserOngoingFeeIncrease(
                  "Ongoing Fee increased by: " + e.target.value + "% PA"
                )
              }
            />
          </>
        )}
      </div>
      <div> or</div>

      <input
        type="radio"
        name="setshowPIncrease"
        // onClick={() => setshowPIncrease(false)}
        onClick={(() => setCpi(true), () => setshowPIncrease(false))}
      />
      <label>CPI per yearuu</label>
    </>
  );
};

export default AdviserDetails2Expanded2;
