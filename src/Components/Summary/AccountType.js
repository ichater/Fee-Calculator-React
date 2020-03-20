import React, { useContext } from "react";
import { SummaryDetailsContext } from "../../Context/SummaryDetailsContext";

const AccountType = () => {
  const { accountType } = useContext(SummaryDetailsContext);
  return (
    <div className="Details-grid">
      <span>Account Type:</span> {accountType}
    </div>
  );
};

export default AccountType;
