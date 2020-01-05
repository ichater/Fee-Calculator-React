import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AccountDetails from "./AccountDetails";
import Investments from "./Investments";
import Main from "./Main";

const Maintabs = ({ SMA, Shares, Funds }) => {
  return (
    <>
      {" "}
      <Tabs className="MainTabs-border">
        <TabList className="MainTabs">
          <Tab className="Tab">Personal Details</Tab>
          <Tab className="Tab">Main</Tab>
          <Tab className="Tab">Investments</Tab>
        </TabList>
        <TabPanel>
          <Investments />
        </TabPanel>
        <TabPanel>
          <AccountDetails />
        </TabPanel>
        <TabPanel>
          <Main SMA={SMA} Shares={Shares} Funds={Funds} />
        </TabPanel>
        <TabPanel>
          <Investments />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Maintabs;
