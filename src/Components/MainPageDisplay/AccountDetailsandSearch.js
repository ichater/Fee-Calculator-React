import React from "react";

const AccountDetailsandSearch = props => {
  const { setBalance } = props;
  return (
    <>
      <label htmlFor="balance">Account Balance total: $</label>
      <input
        type="number"
        name="balance"
        id="balance"
        defaultValue="0"
        onChange={e => setBalance(e.target.value)}
      />
    </>
  );
};

export default AccountDetailsandSearch;
