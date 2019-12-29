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
        <TabList className="MainTabs">
          <Tab className="Tab">Personal Details</Tab>
          <Tab className="Tab">Main</Tab>
          <Tab className="Tab">Investments</Tab>
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
