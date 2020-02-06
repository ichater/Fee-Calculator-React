import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SMADisplay from "./InvestmentLists/SMADisplay";
import FundDisplay from "./InvestmentLists/FundDisplay";
import ShareDisplay from "./InvestmentLists/ShareDisplay";
import InSpecie from "./InvestmentLists/InSpecie";

const Investments = props => {
  const {
    checkedSMA,
    setCheckedSMA,
    mainPageSMA,
    setAddSMA,
    addSMA,
    setMainPageSMA
  } = props;
  return (
    <>
      {" "}
      <Tabs>
        <TabList className="investmentList-tabs">
          <Tab className="Tab1">SMA/TDs</Tab>
          <Tab className="Tab1">Managed Funds</Tab>
          <Tab className="Tab1">Shares</Tab>
          <Tab className="Tab1">In specie option</Tab>
        </TabList>
        <TabPanel>
          <InSpecie />
        </TabPanel>
        <TabPanel>
          <SMADisplay
            setCheckedSMA={setCheckedSMA}
            checkedSMA={checkedSMA}
            addSMA={addSMA}
            setAddSMA={setAddSMA}
            mainPageSMA={mainPageSMA}
            setMainPageSMA={setMainPageSMA}
          />
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
