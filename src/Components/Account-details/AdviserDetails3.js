import React from "react";

const AdviserDetails3 = props => {
  const {
    setAdviserName,
    setAdviserCode,
    setDealerGroup,
    adviserName,
    adviserCode,
    dealerGroup
  } = props;
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
