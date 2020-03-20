import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const AccountType = () => {
  const { setAccountType, accountType } = useContext(SummaryDetailsContext);
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
