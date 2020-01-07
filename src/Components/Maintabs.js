import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AccountDetails from "./AccountDetails";
import Investments from "./Investments";
import Main from "./Main";
import SummaryMain from "./SummaryMain";

const Maintabs = ({ SMA, Shares, Funds }) => {
  const [name, setName] = useState("Please fill in name");
  const [surname, setSurname] = useState("Please fill in surname");
  const [dob, setDob] = useState();
  const [accountType, setAccountType] = useState("Please Select Account type");
  return (
    <>
      {" "}
      <Tabs className="MainTabs-border">
        <TabList className="MainTabs">
          <Tab className="Tab">Personal Details</Tab>
          <Tab className="Tab">Main</Tab>
          <Tab className="Tab">Investments</Tab>
          <Tab className="Tab">Summary Page</Tab>
        </TabList>
        <TabPanel>
          <AccountDetails
            setName={setName}
            setSurname={setSurname}
            setDob={setDob}
            setAccountType={setAccountType}
          />
        </TabPanel>
        <TabPanel>
          <Main SMA={SMA} Shares={Shares} Funds={Funds} />
        </TabPanel>
        <TabPanel>
          <Investments />
        </TabPanel>
        <TabPanel>
          <SummaryMain
            name={name}
            surname={surname}
            dob={dob}
            accountType={accountType}
          />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Maintabs;
