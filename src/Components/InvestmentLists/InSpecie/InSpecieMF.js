import React from "react";
import InSpecieMFInput from "./InSpecieMFInput";

const InSpecieMF = props => {
  const { addFundSubmit } = props;
  return (
    <>
      <h2>Add a Fund</h2>

      <InSpecieMFInput addFundSubmit={addFundSubmit} />
    </>
  );
};

export default InSpecieMF;
