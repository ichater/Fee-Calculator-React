import React from "react";
import "./CSS/App.css";
import "react-tabs/style/react-tabs.css";
import Maintabs from "./Components/Maintabs";

import InvestmentContextProvider from "./Context/InvestmentContext";

function App() {
  return (
    <>
      <InvestmentContextProvider>
        <Maintabs />
      </InvestmentContextProvider>
    </>
  );
}

export default App;
