import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const InvestmentContext = createContext();

const InvestmentContextProvider = props => {
  const [showShares, setShowShares] = useState(false);
  const [showMFs, setShowMFs] = useState(false);
  const [inSpecieMFs, setInSpecieMFs] = useState([]);
  const [inSpecieShares, setInSpecieShares] = useState([]);
  const [checkedShares, setCheckedShates] = useState([]);
  const [checkedMF, setCheckedMF] = useState([]);
  const [checkedSMA, setCheckedSMA] = useState([]);
  const addShareSubmit = (ListedInvestmentName, ASXcode, Category) => {
    setInSpecieShares([
      ...inSpecieShares,
      { ListedInvestmentName, ASXcode, Category, id: uuid() }
    ]);
  };

  const removeShareSumbit = id => {
    setInSpecieShares(inSpecieShares.filter(share => share.id !== id));
  };

  const addFundSubmit = (FundName, APIR, NabOwned, MER) => {
    setInSpecieMFs([
      ...inSpecieMFs,
      { FundName, APIR, NabOwned, MER, id: uuid() }
    ]);
  };
  const removeFundSumbit = id => {
    setInSpecieMFs(inSpecieMFs.filter(fund => fund.id !== id));
  };

  return (
    <InvestmentContext.Provider
      value={{
        inSpecieShares,
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
        setCheckedSMA
      }}
    >
      {props.children}
    </InvestmentContext.Provider>
  );
};

export default InvestmentContextProvider;
