import React from "react";
import PersonalDetails from "./Account-details/PersonalDetails";
import AdviserDetails1 from "./Account-details/AdviserDetails1";
import AdviserDetails2 from "./Account-details/AdviserDetails2";
import AccountType from "./Account-details/AccountType";
import AdviserDetails3 from "./Account-details/AdviserDetails3";

const AccountDetails = props => {
  const {
    setName,
    name,
    setSurname,
    surname,
    setDob,
    dob,
    accountType,
    setAccountType,
    setAdviserInitialFee$,
    adviserInitialFee$,
    adviserInitialFeeP,
    setAdviserInitialFeeP,
    setAdviserOngoingFee$,
    setAdviserOngoingFeeP,
    adviserOngoingFee$,
    adviserOngoingFeeP,
    setadviserOngoingFeeIncrease,
    adviserOngoingFeeIncrease,
    setCpi,
    cpi,
    setAdviserName,
    adviserName,
    adviserCode,
    dealerGroup,
    setAdviserCode,
    setDealerGroup,
    setShowText1,
    showText1,
    showText2,
    setShowText2,
    showText3,
    setShowText3
  } = props;
  return (
    <>
      <div className="IntroHeader-container">
        <p>Adviser /Personal details</p>
        <h1>Fill out Details Below</h1>
        <img
          className="Account-Details_MLC-logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/MLC_Limited_logo.svg/1200px-MLC_Limited_logo.svg.png"
        />
      </div>
      <div className="personal-details-total">
        <PersonalDetails
          setName={setName}
          name={name}
          setSurname={setSurname}
          surname={surname}
          setDob={setDob}
          dob={dob}
        />
        <h2>Account Type</h2>
        <AccountType
          setAccountType={setAccountType}
          accountType={accountType}
        />
        <h2>Adviser Initial Service Fee</h2>
        <AdviserDetails1
          setAdviserInitialFee$={setAdviserInitialFee$}
          setAdviserInitialFeeP={setAdviserInitialFeeP}
          adviserInitialFee$={adviserInitialFee$}
          adviserInitialFeeP={adviserInitialFeeP}
          showText1={showText1}
          setShowText1={setShowText1}
          showText2={showText2}
          setShowText2={setShowText2}
          showText3={showText3}
          setShowText3={setShowText3}
        />
        <h2>Adviser Ongoing Service Fee</h2>
        <AdviserDetails2
          setAdviserOngoingFee$={setAdviserOngoingFee$}
          setAdviserOngoingFeeP={setAdviserOngoingFeeP}
          adviserOngoingFee$={adviserOngoingFee$}
          adviserOngoingFeeP={adviserOngoingFeeP}
          setadviserOngoingFeeIncrease={setadviserOngoingFeeIncrease}
          adviserOngoingFeeIncrease={adviserOngoingFeeIncrease}
          setCpi={setCpi}
          cpi={cpi}
        />
        <h2>Adviser Details</h2>
        <AdviserDetails3
          setAdviserName={setAdviserName}
          setAdviserCode={setAdviserCode}
          setDealerGroup={setDealerGroup}
          adviserName={adviserName}
          adviserCode={adviserCode}
          dealerGroup={dealerGroup}
        />
      </div>
    </>
  );
};

export default AccountDetails;
