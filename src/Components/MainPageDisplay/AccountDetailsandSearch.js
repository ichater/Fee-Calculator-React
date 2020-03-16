import React, { useContext } from "react";
import { MainPageContext } from "./../../Context/MainPageContext";

const AccountDetailsandSearch = props => {
  const { balance, setBalance } = useContext(MainPageContext);

  return (
    <>
      <label htmlFor="balance">Account Balance total: $</label>
      <input
        type="number"
        name="balance"
        id="balance"
        defaultValue="0"
        value={balance}
        onChange={e => setBalance(e.target.value)}
      />
    </>
  );
};

export default AccountDetailsandSearch;
