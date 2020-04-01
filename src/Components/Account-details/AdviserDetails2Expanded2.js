import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const AdviserDetails2Expanded2 = ({ setadviserOngoingFeeIncrease, setCpi }) => {
  const { showPIncrease, setshowPIncrease } = useContext(SummaryDetailsContext);

  return (
    <>
      <div className="AdviserDetails2Expanded__grid-persentage-increase">
        <input
          name="setshowPIncrease"
          type="radio"
          for="setshowPIncrease"
          onChange={() => setshowPIncrease(true)}

          // onClick={() => setCpi(false)}
        />
        <label id="setshowPIncrease">Increase by %</label>
        {showPIncrease && (
          <>
            <input
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
      or
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
