import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AccountDetails from "./AccountDetails";
import Investments from "./Investments.js";

const Maintabs = () => {
  return (
    <>
      {" "}
      <Tabs>
        <TabList>
          <Tab>Personal Details</Tab>
          <Tab>Main</Tab>
          <Tab>Investments</Tab>
        </TabList>
        <TabPanel>
          <AccountDetails />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <Investments />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Maintabs;
