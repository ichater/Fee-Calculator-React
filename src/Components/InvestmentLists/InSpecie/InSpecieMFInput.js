import React, { useState } from "react";
import InSpecieMF from "./InSpecieMF";

const InSpecieMFInput = props => {
  const { addFundSubmit } = props,
    [mfName, setMfName] = useState(""),
    [mfAPIR, setMfAPIR] = useState(""),
    [mfMER, setmfMer] = useState(""),
    [nabOwned, setNabOwned] = useState(false),
    addMF = e => {
      e.preventDefault();
      setMfName("");
      setMfAPIR("");
      setmfMer("");
      addFundSubmit(mfName, mfAPIR, nabOwned, mfMER);
    };
  return (
    <>
      <form className="MF-input-Wrapper" onSubmit={addMF}>
        <label>Fund Name:</label>
        <input
          type="text"
          required
          value={mfName}
          onChange={e => setMfName(e.target.value)}
        ></input>
        <label>APIR:</label>
        <input
          type="text"
          required
          value={mfAPIR}
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
          <option value={nabOwned}>No</option>
          <option value={nabOwned}>Yes</option>
        </select>
        <label>MER</label>
        <input
          type="number"
          required
          value={mfMER}
          onChange={e => setmfMer(e.target.value)}
        />
        <input type="submit" value="Add a Fund"></input>
      </form>
    </>
  );
};

export default InSpecieMFInput;
