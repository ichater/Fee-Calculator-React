import React, { useContext } from "react";
import { MainPageContext } from "./../../Context/MainPageContext";

const AccountDetailsandSearch = () => {
  const { balance } = useContext(MainPageContext);

  return (
    <>
      <label>Account Balance total: $</label>
      <span>{balance}</span>
    </>
  );
};

export default AccountDetailsandSearch;
