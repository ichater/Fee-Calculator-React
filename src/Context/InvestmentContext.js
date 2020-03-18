import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const InvestmentContext = createContext();

const InvestmentContextProvider = props => {
  const [showShares, setShowShares] = useState(false);
  const [showMFs, setShowMFs] = useState(false);
  const [inSpecieMFs, setInSpecieMFs] = useState([]);
  const [inSpecieShares, setInSpecieShares] = useState([]);
  const [checkedShares, setCheckedShates] = useState([
    {
      id: 1,
      ASXcode: "ARB",
      ListedInvestmentName: "ARB CORPORATION LIMITED.",
      Category: "Automobiles & Components"
    },
    {
      id: 2,
      ASXcode: "GUD",
      ListedInvestmentName: "G.U.D. HOLDINGS LIMITED",
      Category: "Automobiles & Components"
    },
    {
      id: 3,
      ASXcode: "ATL",
      ListedInvestmentName: "APOLLO TOURISM & LEISURE LTD",
      Category: "Automobiles & Components"
    }
  ]);
  const [checkedMF, setCheckedMF] = useState([
    {
      id: 1,
      FundName: "MLC Wholesale Horizon 1 Bond Portfolio",
      APIR: "MLC0669AU",
      NabOwned: "#",
      MER: 0.55
    },
    {
      id: 2,
      FundName: "MLC Wholesale Horizon 2 Income Portfolio",
      APIR: "MLC0670AU",
      NabOwned: "#",
      MER: 0.91
    },
    {
      id: 3,
      FundName: "MLC Wholesale Horizon 3 Conservative Growth Portfolio",
      APIR: "MLC0398AU",
      NabOwned: "#",
      MER: 1.04
    }
  ]);
  const [checkedSMA, setCheckedSMA] = useState([
    {
      id: 3,
      Name: "SMA Antares ex 20",
      APIR: "NUN0102AU",
      Nab: "#",
      MER: 0.75
    },
    {
      id: 4,
      Name: "SMA Ausbil Australian Concentrated Equity",
      APIR: "NUN0055AU",
      Nab: "",
      MER: 0.92
    }
  ]);

  const [investmentValue, setInvestmentValue] = useState(0);

  function handleFundValueChange(id, value, investmentType) {
    const newvalue = [...investmentType];
    const index = investmentType.findIndex(f => f.id === id);
    investmentType[index].value = value;
    setInvestmentValue(newvalue);
  }
  const addShareSubmit = (ListedInvestmentName, ASXcode, Category) => {
    setInSpecieShares([
      ...inSpecieShares,
      { ListedInvestmentName, ASXcode, Category, id: uuid() }
    ]);
  };

  const removeShareSumbit = id => {
    setInSpecieShares(inSpecieShares.filter(share => share.id !== id));
    setCheckedShates(checkedShares.filter(asx => asx.id !== id));
  };

  const addFundSubmit = (FundName, APIR, NabOwned, MER) => {
    setInSpecieMFs([
      ...inSpecieMFs,
      { FundName, APIR, NabOwned, MER, id: uuid() }
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
        setCheckedSMA,
        mainRemoveFundSumbit,
        mainRemoveShareSumbit,
        mainRemoveSMASumbit,
        investmentValue,
        setInvestmentValue
      }}
    >
      {props.children}
    </InvestmentContext.Provider>
  );
};

export default InvestmentContextProvider;
