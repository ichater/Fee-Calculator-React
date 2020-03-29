import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AccountDetails from "./AccountDetails";
import Investments from "./Investments";
import Main from "./Main";
import SummaryMain from "./SummaryMain";

const Maintabs = () => {
  const [menuActive, setMenuState] = useState(1);

  const mainTabs = [
    { id: 1, name: "Personal Details" },
    { id: 2, name: "Main" },
    { id: 3, name: "Investments" },
    { id: 4, name: "Summary Page" }
  ];

  return (
    <>
      {" "}
      <Tabs className="MainTabs-border">
        <TabList className="MainTabs">
          {mainTabs.map(tab => {
            return (
              <Tab
                key={tab.id}
                className={tab.id === menuActive && "selectedTab1"}
                onClick={() => {
                  setMenuState(tab.id);
                }}
              >
                {tab.name}
              </Tab>
            );
          })}
        </TabList>
        {/* <TabPanel>
          <Main />
        </TabPanel> */}
        <TabPanel>
          <AccountDetails />
        </TabPanel>
        <TabPanel>
          <Main />
        </TabPanel>
        <TabPanel>
          <Investments />
        </TabPanel>
        <TabPanel>
          <SummaryMain />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Maintabs;
