import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const InSpecieContext = createContext();

const InSpecieContextProvider = props => {
  const [inSpecieShares, setInSpecieShares] = useState([
    {
      id: uuid(),
      ASX: "SFC",
      shareName: "SCHAFFER CORPORATION LIMITED",
      category: "Automobiles & Components"
    },
    {
      id: uuid(),
      ASX: "ANZ",
      shareName: "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED",
      category: "Banks"
    },
    {
      id: uuid(),
      ASX: "CBA",
      shareName: "COMMONWEALTH BANK OF AUSTRALIA.",
      category: "Banks"
    }
  ]);
  const addShareSubmit = (shareName, ASX, category) => {
    setInSpecieShares([
      ...inSpecieShares,
      { shareName, ASX, category, id: uuid() }
    ]);
    console.log(inSpecieShares);
  };

  const removeShareSumbit = id => {
    setInSpecieShares(inSpecieShares.filter(share => share.id !== id));
  };
  return (
    <InSpecieContext.Provider
      value={{
        inSpecieShares,
        setInSpecieShares,
        addShareSubmit,
        removeShareSumbit
      }}
    >
      {props.children}
    </InSpecieContext.Provider>
  );
};

export default InSpecieContextProvider;
