import React, { useState } from "react";

import uuid from "uuid/v4";

const InSpecieMFInput = props => {
  const { addFundSubmit } = props,
    [FundName, setMfName] = useState(""),
    [APIR, setMfAPIR] = useState(""),
    [MER, setmfMer] = useState(""),
    [NabOwned] = useState(false),
    [id, setId] = useState(),
    value = 0,
    addMF = e => {
      e.preventDefault();
      setMfName("");
      setMfAPIR("");
      setmfMer("");
      setId(uuid());
      // setValue(0);
      addFundSubmit(FundName, APIR, NabOwned, MER, value, id);
    };
  return (
    <>
      <form className="MF-input-Wrapper" onSubmit={addMF}>
        <label>Fund Name:</label>
        <input
          type="text"
          required
          value={FundName}
          onChange={e => setMfName(e.target.value)}
        ></input>
        <label>APIR:</label>
        <input
          type="text"
          required
          value={APIR}
          onChange={e => setMfAPIR(e.target.value)}
        ></input>
        <label>MER</label>
        <input
          type="number"
          required
          value={MER}
          onChange={e => setmfMer(e.target.value)}
        />
        <input type="submit" value="Add a Fund"></input>
      </form>
    </>
  );
};

export default InSpecieMFInput;
