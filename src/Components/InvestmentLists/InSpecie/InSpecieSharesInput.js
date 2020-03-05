import React, { useState } from "react";

const InSpecieSharesInput = props => {
  const { addShareSubmit } = props,
    [ListedInvestmentName, setListedInvestmentName] = useState(""),
    [ASXcode, setASXCode] = useState(""),
    [Category, setCategory] = useState(""),
    addShare = e => {
      e.preventDefault();
      setListedInvestmentName("");
      setASXCode("");
      setCategory("");
      addShareSubmit(ListedInvestmentName, ASXcode, Category);
    };
  return (
    <>
      <form className="MF-input-Wrapper" onSubmit={addShare}>
        <label>ASX Code:</label>
        <input
          type="text"
          required
          value={ASXcode}
          onChange={e => setASXCode(e.target.value)}
        ></input>
        <label>Name</label>
        <input
          type="text"
          required
          value={ListedInvestmentName}
          onChange={e => setListedInvestmentName(e.target.value)}
        ></input>
        <label>Category</label>
        <input
          type="text"
          required
          value={Category}
          onChange={e => setCategory(e.target.value)}
        ></input>

        <input type="submit" value="Add a Share"></input>
      </form>
    </>
  );
};

export default InSpecieSharesInput;
