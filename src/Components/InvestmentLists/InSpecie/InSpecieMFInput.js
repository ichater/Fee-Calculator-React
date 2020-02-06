import React from "react";

const InSpecieMFInput = () => {
  return (
    <>
      <form className="MF-input-Wrapper">
        <label>Fund Name:</label>
        <input type="text"></input>
        <label>APIR:</label>
        <input type="text"></input>
        <select>
          <option>Nab Owned</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <label>MER</label>
        <input type="number"></input>
      </form>
    </>
  );
};

export default InSpecieMFInput;
