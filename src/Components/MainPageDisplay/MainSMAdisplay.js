import React, { useContext } from "react";
import MainSMAdisplay1 from "./MainSMAdisplay1";
import { InvestmentContext } from "./../../Context/InvestmentContext";

const MainSMAdisplay = () => {
  const { checkedSMA, setCheckedSMA } = useContext(InvestmentContext);

  const handleUpdate = (id, value) => {
    const itemsCopy = [...checkedSMA];
    const index = itemsCopy.findIndex(item => item.id === id);
    itemsCopy[index].value = value;
    setCheckedSMA(itemsCopy);
  };
  return (
    <>
      {/* <tbody> */}
      {checkedSMA.map(checkedSMA => {
        return (
          <MainSMAdisplay1
            key={checkedSMA.id}
            {...checkedSMA}
            handleUpdate={handleUpdate}
          />
        );
      })}
      {/* </tbody> */}
    </>
  );
};

export default MainSMAdisplay;
