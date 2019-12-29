import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SMADisplay from "./InvestmentLists/SMADisplay";
import FundDisplay from "./InvestmentLists/FundDisplay";
import ShareDisplay from "./InvestmentLists/ShareDisplay";
import InSpecie from "./InvestmentLists/InSpecie";

const Investments = () => {
  return (
    <>
      {" "}
      <Tabs>
        <TabList>
          <Tab>SMA/TDs</Tab>
          <Tab>Managed Funds</Tab>
          <Tab>Shares</Tab>
          <Tab>In specie option</Tab>
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
