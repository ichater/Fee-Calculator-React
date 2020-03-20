import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const AdviserDetails3 = () => {
  const {
    setAdviserName,
    setAdviserCode,
    setDealerGroup,
    adviserName,
    adviserCode,
    dealerGroup
  } = useContext(SummaryDetailsContext);
  return (
    <div className="personal-details__self">
      <label>Name</label>
      <input
        type="text"
        onChange={e => setAdviserName(e.target.value)}
        value={adviserName}
      ></input>
      <label>Code</label>
      <input
        type="number"
        onChange={e => setAdviserCode(e.target.value)}
        value={adviserCode}
      ></input>
      <label>Dealer group</label>
      <input
        type="text"
        onChange={e => setDealerGroup(e.target.value)}
        value={dealerGroup}
      ></input>
    </div>
  );
};

export default AdviserDetails3;
