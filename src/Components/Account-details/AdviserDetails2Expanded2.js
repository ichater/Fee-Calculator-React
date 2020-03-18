import React, { useState } from "react";

const AdviserDetails2Expanded2 = ({ setadviserOngoingFeeIncrease, setCpi }) => {
  const [showPIncrease, setshowPIncrease] = useState(false);

  return (
    <>
      <div>
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
