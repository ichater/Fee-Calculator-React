import React from "react";

const InSpecieSharesInput = () => {
  return (
    <>
      <form className="MF-input-Wrapper">
        <label>ASX Code:</label>
        <input type="text"></input>
        <label>Name</label>
        <input type="text"></input>
        <label>Category</label>
        <input type="text"></input>

        <input type="submit" value="Add a Share"></input>
      </form>
    </>
  );
};

export default InSpecieSharesInput;
