import React from "react";

const AccountType = ({ setAccountType, accountType }) => {
  return (
    <div className="DetailsPage-positioning">
      <select
        name="account-type"
        onChange={e => setAccountType(e.target.value)}
        value={accountType}
      >
        <option>Please Select</option>
        <option>Super</option>
        <option>Pension</option>
        <option>Investment</option>
      </select>
    </div>
  );
};

export default AccountType;
