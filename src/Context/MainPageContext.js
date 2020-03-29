import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const MainPageContext = createContext();

const MainPageContextProvider = props => {
  const [balance, setBalance] = useState(0);
  const [t1, setT1] = useState(0);
  const [t2, setT2] = useState(0);
  const [t3, setT3] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [paymentType, setPaymentType] = useState("Nothing Selected");
  const [paymentAmount, setPaymentAmount] = useState();
  const [payMentFrequency, setPaymentFrequency] = useState();
  const [perPensionPayment, setPerPensionPayment] = useState();

  const feetable = balance => {
    if (balance == 0) {
      setT1(0);
    }
    if (balance > 1 && balance < 93750) {
      setT1(375);
      setT2(0);
      setT3(0);
    }
    if (balance < 200000 && balance > 93750) {
      setT1((balance * 0.004).toFixed(2));
      setT2(0);
      setT3(0);
    }
    if (balance > 200000 && balance < 500000) {
      setT1(800);
      setT2(((balance - 200000) * 0.0015).toFixed(2));
      setT3(0);
    }
    if (balance > 500000) {
      setT1(800);
      setT2(600);
      ((balance - 500000) * 0.0003).toFixed(2) > 1000
        ? setT3(1000)
        : setT3(((balance - 500000) * 0.0003).toFixed(2));
    }
  };
  const annualPayment = minpen => {
    if (paymentType == "Minimum") {
      setPaymentAmount(minpen);
      return <span>{paymentAmount}</span>;
    } else if (paymentType == "Nominated") {
      return (
        <input
          type="number"
          onChange={e => setPaymentAmount(e.target.value)}
        ></input>
      );
    } else {
      return <> Please Select </>;
    }
  };

  const payMentFrequencyFunction = () => {
    if (payMentFrequency == "2 weeks") {
      setPerPensionPayment((paymentAmount / 26).toFixed(2));
    }
    if (payMentFrequency == "Monthly") {
      setPerPensionPayment((paymentAmount / 12).toFixed(2));
    }
    if (payMentFrequency == "Quarterly") {
      setPerPensionPayment((paymentAmount / 4).toFixed(2));
    }
    if (payMentFrequency == "Bi-Yearly") {
      setPerPensionPayment((paymentAmount / 2).toFixed(2));
    }
    if (payMentFrequency == "Yearly") {
      setPerPensionPayment(paymentAmount);
    }

    return perPensionPayment;
  };

  return (
    <MainPageContext.Provider
      value={{
        balance,
        payMentFrequencyFunction,
        setBalance,
        feetable,
        t1,
        t2,
        t3,
        totalFee,
        setTotalFee,
        paymentAmount,
        setPaymentAmount,
        paymentType,
        setPaymentType,
        annualPayment,
        payMentFrequency,
        setPaymentFrequency,

        perPensionPayment,
        setPerPensionPayment
      }}
    >
      {props.children}
    </MainPageContext.Provider>
  );
};

export default MainPageContextProvider;
