import React from "react";
import InSpecieSharesInput from "./InSpecieSharesInput";

const InSpecieShares = ({ addShareSubmit }) => {
  return (
    <>
      <h2>Add a Share</h2>
      <InSpecieSharesInput addShareSubmit={addShareSubmit} />
    </>
  );
};

export default InSpecieShares;
