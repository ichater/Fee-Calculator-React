import React, { useContext } from "react";
import { MainPageContext } from "./../../Context/MainPageContext";

const AccountDetailsandSearch = () => {
  const { balance, setBalance, feetable } = useContext(MainPageContext);

  return (
    <>
      <label>Account Balance total: $</label>
      <span>{balance}</span>
      <br />
      <label>Placeholder input for testing:</label>

      <input
        type="number"
        name="balance"
        id="balance"
        defaultValue="0"
        value={balance}
        onChange={e => {
          setBalance(e.target.value);
          feetable(e.target.value);
        }}
      />
    </>
  );
};

export default AccountDetailsandSearch;
