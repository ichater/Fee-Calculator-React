import React, { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AccountDetails from "./AccountDetails";
import Investments from "./Investments";
import Main from "./Main";
import SummaryMain from "./SummaryMain";

const Maintabs = () => {
  const [name, setName] = useState("John"),
    [surname, setSurname] = useState("Doe"),
    [dob, setDob] = useState("01/01/1900"),
    [accountType, setAccountType] = useState("Please Select Account type"),
    [adviserInitialFee$, setAdviserInitialFee$] = useState(),
    [adviserInitialFeeP, setAdviserInitialFeeP] = useState(),
    [adviserOngoingFee$, setAdviserOngoingFee$] = useState(),
    [adviserOngoingFeeP, setAdviserOngoingFeeP] = useState(),
    [cpi, setCpi] = useState(false),
    [adviserOngoingFeeIncrease, setadviserOngoingFeeIncrease] = useState(),
    [adviserName, setAdviserName] = useState("Jane Doe Inc"),
    [adviserCode, setAdviserCode] = useState("133766"),
    [dealerGroup, setDealerGroup] = useState("Borkuf enterprises"),
    [showText1, setShowText1] = useState(false),
    [showText2, setShowText2] = useState(false),
    [showText3, setShowText3] = useState(false),
    [menuActive, setMenuState] = useState(1);

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
          <AccountDetails
            showText1={showText1}
            setShowText1={setShowText1}
            showText2={showText2}
            setShowText2={setShowText2}
            showText3={showText3}
            setShowText3={setShowText3}
            setName={setName}
            name={name}
            setSurname={setSurname}
            setDob={setDob}
            setAccountType={setAccountType}
            setAdviserInitialFee$={setAdviserInitialFee$}
            setAdviserInitialFeeP={setAdviserInitialFeeP}
            setAdviserOngoingFee$={setAdviserOngoingFee$}
            setAdviserOngoingFeeP={setAdviserOngoingFeeP}
            setadviserOngoingFeeIncrease={setadviserOngoingFeeIncrease}
            setCpi={setCpi}
            setAdviserName={setAdviserName}
            setAdviserCode={setAdviserCode}
            setDealerGroup={setDealerGroup}
            name={name}
            surname={surname}
            dob={dob}
            accountType={accountType}
            adviserInitialFee$={adviserInitialFee$}
            adviserInitialFeeP={adviserInitialFeeP}
            adviserOngoingFee$={adviserOngoingFee$}
            adviserOngoingFeeP={adviserOngoingFeeP}
            adviserOngoingFeeIncrease={adviserOngoingFeeIncrease}
            cpi={cpi}
            adviserName={adviserName}
            adviserCode={adviserCode}
            dealerGroup={dealerGroup}
          />
        </TabPanel>
        <TabPanel>
          <Main />
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
            adviserInitialFee$={adviserInitialFee$}
            adviserInitialFeeP={adviserInitialFeeP}
            adviserOngoingFee$={adviserOngoingFee$}
            adviserOngoingFeeP={adviserOngoingFeeP}
            adviserOngoingFeeIncrease={adviserOngoingFeeIncrease}
            cpi={cpi}
            adviserName={adviserName}
            adviserCode={adviserCode}
            dealerGroup={dealerGroup}
          />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Maintabs;
