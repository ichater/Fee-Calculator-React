import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SMADisplay from "./InvestmentLists/SMADisplay";
import FundDisplay from "./InvestmentLists/FundDisplay";
import ShareDisplay from "./InvestmentLists/ShareDisplay";
import InSpecie from "./InvestmentLists/InSpecie";

const Investments = () => {
  const [menuActive, setMenuState] = useState(1);
  const InvestmentTabs = [
    { id: 1, name: "SMA/TDs" },
    { id: 2, name: "Managed Funds" },
    { id: 3, name: "Shares" },
    { id: 4, name: "In specie option" }
  ];
  return (
    <>
      {" "}
      <Tabs>
        <TabList className="investmentList-tabs">
          {InvestmentTabs.map(tab => {
            return (
              <Tab
                key={tab.id}
                className={tab.id === menuActive && "selectedTab2"}
                onClick={() => {
                  setMenuState(tab.id);
                }}
              >
                {tab.name}
              </Tab>
            );
          })}
        </TabList>

        <TabPanel>
          <SMADisplay />
        </TabPanel>
        <TabPanel>
          <FundDisplay />
        </TabPanel>
        <TabPanel>
          <ShareDisplay />
        </TabPanel>
        <TabPanel>
          <InSpecie />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Investments;
