import React from "react";

const AccountType = ({ accountType }) => {
  return (
    <div className="Details-grid">
      <span>Account Type:</span> {accountType}
    </div>
  );
};

export default AccountType;
