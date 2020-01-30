import React from "react";
import "./CSS/App.css";
import "react-tabs/style/react-tabs.css";
import Maintabs from "./Components/Maintabs";
// import { render } from "react-dom";
// import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

function App() {
  return (
    <>
      <Maintabs
        // mainPageSMA={mainPageSMA}
        Shares={sampleShares}
        Funds={sampleMFs}
      />
    </>
  );
}

// const mainPageSMA = [];

const sampleShares = [
  {
    id: 4,
    ASXcode: "ARB",
    ListedInvestmentName: "ARB CORPORATION LIMITED.",
    Category: "Automobiles & Components"
  },
  {
    id: 5,
    ASXcode: "GUD",
    ListedInvestmentName: "G.U.D. HOLDINGS LIMITED",
    Category: "Automobiles & Components"
  },
  {
    id: 6,
    ASXcode: "ATL",
    ListedInvestmentName: "APOLLO TOURISM & LEISURE LTD",
    Category: "Automobiles & Components"
  },
  {
    id: 8,
    ASXcode: "PWH",
    ListedInvestmentName: "PWR HOLDINGS LIMITED",
    Category: "Automobiles & Components"
  }
];

const sampleMFs = [
  {
    id: 7,
    FundName: "MLC Wholesale Horizon 2 Income Portfolio",
    APIR: "MLC0670AU",
    NabOwned: "#",
    MER: 0.91
  },
  {
    id: 8,
    FundName: "MLC Wholesale Horizon 3 Conservative Growth Portfolio",
    APIR: "MLC0398AU",
    NabOwned: "#",
    MER: 1.04
  },
  {
    id: 9,
    FundName: "MLC Wholesale Horizon 4 Balanced Portfolio",
    APIR: "MLC0260AU",
    NabOwned: "#",
    MER: 1.08
  }
];
export default App;
