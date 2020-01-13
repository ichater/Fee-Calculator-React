import React from "react";
import PersonalDetails from "./Account-details/PersonalDetails";
import AdviserDetails1 from "./Account-details/AdviserDetails1";
import AdviserDetails2 from "./Account-details/AdviserDetails2";
import AccountType from "./Account-details/AccountType";
import AdviserDetails3 from "./Account-details/AdviserDetails3";

const AccountDetails = props => {
  const {
    setName,
    setSurname,
    setDob,
    setAccountType,
    setAdviserInitialFee$,
    setAdviserInitialFeeP,
    setAdviserOngoingFee$,
    setAdviserOngoingFeeP,
    setadviserOngoingFeeIncrease,
    setCpi,
    setAdviserName,
    setAdviserCode,
    setDealerGroup
  } = props;
  return (
    <>
      <div className="IntroHeader-container">
        <p>Adviser /Personal details</p>
        <h1>Fill out Details Below</h1>
      </div>
      <div className="personal-details-total">
        <PersonalDetails
          setName={setName}
          setSurname={setSurname}
          setDob={setDob}
        />
        <h2>Account Type</h2>
        <AccountType setAccountType={setAccountType} />
        <h2>Adviser Initial Service Fee</h2>
        <AdviserDetails1
          setAdviserInitialFee$={setAdviserInitialFee$}
          setAdviserInitialFeeP={setAdviserInitialFeeP}
        />
        <h2>Adviser Ongoing Service Fee</h2>
        <AdviserDetails2
          setAdviserOngoingFee$={setAdviserOngoingFee$}
          setAdviserOngoingFeeP={setAdviserOngoingFeeP}
          setadviserOngoingFeeIncrease={setadviserOngoingFeeIncrease}
          setCpi={setCpi}
        />
        <h2>Adviser Details</h2>
        <AdviserDetails3
          setAdviserName={setAdviserName}
          setAdviserCode={setAdviserCode}
          setDealerGroup={setDealerGroup}
        />
      </div>
    </>
  );
};

export default AccountDetails;
