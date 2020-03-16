import React, { createContext, useState } from "react";
import uuid from "uuid/v4";

export const MainPageContext = createContext();

const MainPageContextProvider = props => {
  const [balance, setBalance] = useState(5000);

  return (
    <MainPageContext.Provider value={{ balance, setBalance }}>
      {props.children}
    </MainPageContext.Provider>
  );
};

export default MainPageContextProvider;
