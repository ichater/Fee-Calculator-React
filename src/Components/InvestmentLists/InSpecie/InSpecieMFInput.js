import React, { useState } from "react";

import uuid from "uuid/v4";

const InSpecieMFInput = props => {
  const { addFundSubmit } = props,
    [FundName, setMfName] = useState(""),
    [APIR, setMfAPIR] = useState(""),
    [MER, setmfMer] = useState(""),
    [NabOwned, setNabOwned] = useState(false),
    [id, setId] = useState(),
    addMF = e => {
      e.preventDefault();
      setMfName("");
      setMfAPIR("");
      setmfMer("");
      setId(uuid());
      addFundSubmit(FundName, APIR, NabOwned, MER, id);
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
        <select
          name="NabOwned"
          onChange={e => {
            if (e.target.value == "no") {
              setNabOwned(false);
            }
            if (e.target.value == "yes") {
              setNabOwned(true);
            }
          }}
        >
          <option value={NabOwned}>No</option>
          <option value={NabOwned}>Yes</option>
        </select>
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
