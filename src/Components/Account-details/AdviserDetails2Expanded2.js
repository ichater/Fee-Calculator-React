import React, { useState } from "react";

const AdviserDetails2Expanded2 = ({ setadviserOngoingFeeIncrease, setCpi }) => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div>
        <input
          type="radio"
          name="increaseFee"
          onClick={() => setShowText(true)}
          onClick={() => setCpi(false)}
        />
        <label>Increase by %</label>
        {showText && (
          <input
            type="number"
            onChange={e => setadviserOngoingFeeIncrease(e.target.value + "%")}
          />
        )}
      </div>
      or
      <input
        type="radio"
        name="increaseFee"
        onClick={() => setShowText(false)}
        onClick={() => setCpi(true)}
      />
      <label>CPI per year</label>
    </>
  );
};

export default AdviserDetails2Expanded2;
