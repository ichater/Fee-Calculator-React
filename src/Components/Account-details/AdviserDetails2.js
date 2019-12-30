import React, { useState } from "react";
import AdviserDetails2Expanded from "./AdviserDetails2Expanded";

const AdviserDetails2 = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <h2>Adviser Ongoing Service Fee</h2>
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
      {showText && <AdviserDetails2Expanded />}
    </>
  );
};

export default AdviserDetails2;
