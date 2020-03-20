import React, { useContext } from "react";
import MainSMAdisplay1 from "./MainSMAdisplay1";
import { InvestmentContext } from "./../../Context/InvestmentContext";

const MainSMAdisplay = () => {
  const { checkedSMA, investmentValue } = useContext(InvestmentContext);
  investmentValue(checkedSMA);
  return (
    <>
      <tbody>
        {checkedSMA.map(checkedSMA => {
          return <MainSMAdisplay1 key={checkedSMA.id} {...checkedSMA} />;
        })}
      </tbody>
    </>
  );
};

export default MainSMAdisplay;
