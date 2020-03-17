import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const MainPageContext = createContext();

const MainPageContextProvider = props => {
  const [balance, setBalance] = useState();
  const [t1, setT1] = useState(0);
  const [t2, setT2] = useState(0);
  const [t3, setT3] = useState(0);
  const [totalFee, setTotalFee] = useState(0);

  function feetable(balance) {
    if (balance == 0) {
      setT1(0);
    }
    if (balance > 1 && balance < 93750) {
      setT1(375);
      setT2(0);
      setT3(0);
    }
    if (balance < 200000 && balance > 93750) {
      setT1(balance * 0.004);
      setT2(0);
      setT3(0);
    }
    if (balance > 200000 && balance < 500000) {
      setT1(800);
      setT2((balance - 200000) * 0.0015);
      setT3(0);
    }
    if (balance > 500000) {
      setT1(800);
      setT2(600);
      setT3((balance - 500000) * 0.0003);
    }
  }

  return (
    <MainPageContext.Provider
      value={{
        balance,
        setBalance,
        feetable,
        t1,
        t2,
        t3,
        totalFee,
        setTotalFee
      }}
    >
      {props.children}
    </MainPageContext.Provider>
  );
};

export default MainPageContextProvider;
