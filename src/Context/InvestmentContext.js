import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const InvestmentContext = createContext();

const InvestmentContextProvider = props => {
  const [showShares, setShowShares] = useState(false);
  const [showMFs, setShowMFs] = useState(false);
  const [inSpecieMFs, setInSpecieMFs] = useState([]);
  const [inSpecieShares, setInSpecieShares] = useState([]);
  const [showText1, setShowText1] = useState(false);
  const [checkedShares, setCheckedShates] = useState([]);
  const [checkedMF, setCheckedMF] = useState([]);
  const [checkedSMA, setCheckedSMA] = useState([]);

  const addShareSubmit = (ListedInvestmentName, ASXcode, Category, value) => {
    setInSpecieShares([
      ...inSpecieShares,
      { ListedInvestmentName, ASXcode, Category, id: uuid(), value }
    ]);
  };

  const removeShareSumbit = id => {
    setInSpecieShares(inSpecieShares.filter(share => share.id !== id));
    setCheckedShates(checkedShares.filter(asx => asx.id !== id));
  };

  const addFundSubmit = (FundName, APIR, NabOwned, MER, value) => {
    setInSpecieMFs([
      ...inSpecieMFs,
      { FundName, APIR, NabOwned, MER, id: uuid(), value }
    ]);
  };
  const removeFundSumbit = id => {
    setInSpecieMFs(inSpecieMFs.filter(fund => fund.id !== id));
    setCheckedMF(checkedMF.filter(fund => fund.id !== id));
  };

  const mainRemoveFundSumbit = id => {
    setCheckedMF(checkedMF.filter(fund => fund.id !== id));
  };

  const mainRemoveShareSumbit = id => {
    setCheckedShates(checkedShares.filter(asx => asx.id !== id));
  };

  const mainRemoveSMASumbit = id => {
    setCheckedSMA(checkedSMA.filter(SMA => SMA.id !== id));
  };

  const listedFee = () => {
    if (checkedShares.length > 0) {
      return checkedShares
        .map(Share => (Share.value / 100) * 0.1)
        .reduce((acc, cur) => acc + cur)
        .toFixed(2);
    } else {
      return 0;
    }
  };

  const nabFee = () => {
    const ncheckedMF = [...checkedMF];
    const ncheckedSMA = [...checkedSMA];
    const total1 = () => {
      const b = ncheckedMF.filter(ncheckedMF => ncheckedMF.NabOwned == "");
      const c = ncheckedSMA.filter(ncheckedSMA => ncheckedSMA.Nab == "");
      const a = b.concat(c);
      if (a.length > 0) {
        return a
          .map(fund => (fund.value / 100) * 0.15)
          .reduce((acc, cur) => acc + cur)
          .toFixed(2);
      } else {
        return 0.0;
      }
    };
    return total1();
  };

  const totalVal = () => {
    const a = [...checkedMF];
    const b = [...checkedSMA];
    const c = [...checkedShares];
    const d = a.concat(b).concat(c);
    // const e = d
    //   .map(i => i.value)
    //   .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    if (d.length == 0) {
      return 0.0;
    } else {
      return d
        .map(i => i.value)
        .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    }
  };

  return (
    <InvestmentContext.Provider
      value={{
        inSpecieShares,
        totalVal,
        nabFee,
        setInSpecieShares,
        addShareSubmit,
        removeShareSumbit,
        showShares,
        setShowShares,
        showMFs,
        setShowMFs,
        addFundSubmit,
        inSpecieMFs,
        setInSpecieMFs,
        checkedShares,
        setCheckedShates,
        checkedMF,
        setCheckedMF,
        removeFundSumbit,
        checkedSMA,
        setCheckedSMA,
        mainRemoveFundSumbit,
        mainRemoveShareSumbit,
        mainRemoveSMASumbit,
        listedFee,
        showText1,
        setShowText1
      }}
    >
      {props.children}
    </InvestmentContext.Provider>
  );
};

export default InvestmentContextProvider;
