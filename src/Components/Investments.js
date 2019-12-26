import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
        <TabPanel>SMA/TDs</TabPanel>
        <TabPanel>Managed Funds</TabPanel>
        <TabPanel>Shares</TabPanel>
        <TabPanel>Add a Fund</TabPanel>
      </Tabs>
    </>
  );
};

export default Investments;
