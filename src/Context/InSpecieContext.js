import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const InSpecieContext = createContext();

const InSpecieContextProvider = props => {
  const [showShares, setShowShares] = useState(false);
  const [showMFs, setShowMFs] = useState(false);
  const [inSpecieMFs, setInSpecieMFs] = useState([
    {
      mfName: "MLC Wholesale Horizon 3 Conservative Growth Portfolio",
      mfAPIR: "MLC0398AU",
      nabOwned: "#",
      mfMER: 1.04
    },
    {
      mfName: "MLC Wholesale Horizon 4 Balanced Portfolio",
      mfAPIR: "MLC0260AU",
      nabOwned: "#",
      mfMER: 1.08
    }
  ]);
  const [inSpecieShares, setInSpecieShares] = useState([
    {
      ASXcode: "GUD",
      ListedInvestmentName: "G.U.D. HOLDINGS LIMITED",
      Category: "Automobiles & Components"
    },
    {
      ASXcode: "ATL",
      ListedInvestmentName: "APOLLO TOURISM & LEISURE LTD",
      Category: "Automobiles & Components"
    },
    {
      ASXcode: "PWH",
      ListedInvestmentName: "PWR HOLDINGS LIMITED",
      Category: "Automobiles & Components"
    }
  ]);
  const addShareSubmit = (ListedInvestmentName, ASXcode, Category) => {
    setInSpecieShares([
      ...inSpecieShares,
      { ListedInvestmentName, ASXcode, Category, id: uuid() }
    ]);
    console.log(inSpecieShares);
  };

  const removeShareSumbit = id => {
    setInSpecieShares(inSpecieShares.filter(share => share.id !== id));
  };

  const addFundSubmit = (mfName, mfAPIR, nabOwned, mfMER) => {
    setInSpecieMFs([
      ...inSpecieMFs,
      { mfName, mfAPIR, nabOwned, mfMER, id: uuid() }
    ]);
    console.log(inSpecieMFs);
  };
  return (
    <InSpecieContext.Provider
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
        setInSpecieMFs
      }}
    >
      {props.children}
    </InSpecieContext.Provider>
  );
};

export default InSpecieContextProvider;
