import React from "react";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PersonalDetails from "./Components/PersonalDetails";

function App() {
  return (
    <>
      {" "}
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>
        <TabPanel>
          <PersonalDetails />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <PersonalDetails />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
