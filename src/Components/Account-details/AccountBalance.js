import React, { useContext } from "react";
import { MainPageContext } from "./../../Context/MainPageContext";

export default function AccountBalance() {
  const { balance, setBalance, feetable } = useContext(MainPageContext);
  return (
    <div>
      <label htmlFor="balance">Total: $</label>
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
    </div>
  );
}
