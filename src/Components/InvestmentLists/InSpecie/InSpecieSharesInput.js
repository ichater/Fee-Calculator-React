import React, { useState } from "react";

const InSpecieSharesInput = props => {
  const { addShareSubmit } = props,
    [shareName, setShareName] = useState(""),
    [ASX, setASX] = useState(""),
    [category, setCategory] = useState(""),
    addShare = e => {
      e.preventDefault();
      setShareName("");
      setASX("");
      setCategory("");
      addShareSubmit(shareName, ASX, category);
    };
  return (
    <>
      <form className="MF-input-Wrapper" onSubmit={addShare}>
        <label>ASX Code:</label>
        <input
          type="text"
          required
          value={ASX}
          onChange={e => setASX(e.target.value)}
        ></input>
        <label>Name</label>
        <input
          type="text"
          required
          value={shareName}
          onChange={e => setShareName(e.target.value)}
        ></input>
        <label>Category</label>
        <input
          type="text"
          required
          value={category}
          onChange={e => setCategory(e.target.value)}
        ></input>

        <input type="submit" value="Add a Share"></input>
      </form>
    </>
  );
};

export default InSpecieSharesInput;
