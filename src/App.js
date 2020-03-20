import React from "react";
import "./CSS/App.css";
import "react-tabs/style/react-tabs.css";
import Maintabs from "./Components/Maintabs";

import SummaryDetailsContextProvider from "./Context/SummaryDetailsContext";
import InvestmentContextProvider from "./Context/InvestmentContext";
import MainPageContextProvider from "./Context/MainPageContext";

function App() {
  return (
    <>
      <SummaryDetailsContextProvider>
        <MainPageContextProvider>
          <InvestmentContextProvider>
            <Maintabs />
          </InvestmentContextProvider>
        </MainPageContextProvider>
      </SummaryDetailsContextProvider>
    </>
  );
}

export default App;
