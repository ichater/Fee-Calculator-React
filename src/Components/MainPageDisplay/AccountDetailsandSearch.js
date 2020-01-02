import React from "react";

const AccountDetailsandSearch = props => {
  const { balance, tierOne } = props;
  return (
    <>
      <label htmlFor="balance">Account Balance total: $</label>
      <input
        type="number"
        name="balance"
        id="balance"
        defaultValue="0"
        onChange={e => balance({ balance: e.target.value })}
      />
    </>
  );
};

export default AccountDetailsandSearch;
