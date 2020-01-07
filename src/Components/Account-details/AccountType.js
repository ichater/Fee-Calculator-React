import React from "react";

const AccountType = ({ setAccountType }) => {
  return (
    <>
      <select
        name="account-type"
        onChange={e => setAccountType(e.target.value)}
      >
        <option>Please Select</option>
        <option>Super</option>
        <option>Pension</option>
        <option>Investment</option>
      </select>
    </>
  );
};

export default AccountType;
