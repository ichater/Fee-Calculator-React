import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AccountDetails from "./AccountDetails";
import Investments from "./Investments";
import Main from "./Main";

const Maintabs = ({ SMA }) => {
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
          <Main SMA={SMA} />
        </TabPanel>
        <TabPanel>
          <AccountDetails />
        </TabPanel>
        <TabPanel>
          <Main SMA={SMA} />
        </TabPanel>
        <TabPanel>
          <Investments />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Maintabs;
