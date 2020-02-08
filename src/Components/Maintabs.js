import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AccountDetails from "./AccountDetails";
import Investments from "./Investments";
import Main from "./Main";
import SummaryMain from "./SummaryMain";

const Maintabs = ({ Shares, Funds }) => {
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
    [selectSMA, setSelectSMA] = useState(false),
    [checkedSMA, setCheckedSMA] = useState([]),
    [showText1, setShowText1] = useState(false),
    [showText2, setShowText2] = useState(false),
    [showText3, setShowText3] = useState(false);

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
        {/* <TabPanel>
          <Investments setCheckedSMA={setCheckedSMA} checkedSMA={checkedSMA} />
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
          <Main
            Shares={Shares}
            Funds={Funds}
            selectSMA={selectSMA}
            setCheckedSMA={setCheckedSMA}
            checkedSMA={checkedSMA}
          />
        </TabPanel>
        <TabPanel>
          <Investments setCheckedSMA={setCheckedSMA} checkedSMA={checkedSMA} />
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
