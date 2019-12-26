import React from "react";
import PersonalDetails from "./Account-details/PersonalDetails";
import AdviserDetails1 from "./Account-details/AdviserDetails1";
import AdviserDetails2 from "./Account-details/AdviserDetails2";
import AccountType from "./Account-details/AccountType";
import AdviserDetails3 from "./Account-details/AdviserDetails3";

const AccountDetails = () => {
  return (
    <>
      <div className="personal-details-experiment">
        <PersonalDetails />
        <h2>Account Type</h2>
        <AccountType />
        <h2>Adviser Service Fee</h2>
        <AdviserDetails1 />
        <h2>Adviser Service Fee</h2>
        <AdviserDetails2 />
        <h2>Adviser Details</h2>
        <AdviserDetails3 />
        <br />
        <button>Submit</button>
      </div>
    </>
  );
};

export default AccountDetails;
