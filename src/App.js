import React from "react";
import "./CSS/App.css";
import "react-tabs/style/react-tabs.css";
import Maintabs from "./Components/Maintabs";

function App() {
  return (
    <>
      <Maintabs SMA={sampleSMA} />
    </>
  );
}

const sampleSMA = [
  {
    id: 1,
    Name: "SMA Ausbil Australian Concentrated Equity",
    APIR: "NUN0055AU",
    Nab: "",
    MER: 0.92
  },
  {
    id: 2,
    Name: "SMA Blue Chip Top 20",
    APIR: "NUN0051AU",
    Nab: "#",
    MER: 0.21
  }
];

export default App;
