import React from "react";
import PersonalDetails from "./Account-details/PersonalDetails";
import AdviserDetails1 from "./Account-details/AdviserDetails1";
import AdviserDetails2 from "./Account-details/AdviserDetails2";
import AccountType from "./Account-details/AccountType";
import AdviserDetails3 from "./Account-details/AdviserDetails3";
import AccountBalance from "./Account-details/AccountBalance";

const AccountDetails = () => {
  return (
    <div className="Account-Details-wrapper">
      <div className="IntroHeader-container">
        <p>Adviser /Personal details</p>
        <h1>Fill out Details Below</h1>
        <img
          className="Account-Details_MLC-logo"
          alt="mlc logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/MLC_Limited_logo.svg/1200px-MLC_Limited_logo.svg.png"
        />
      </div>
      <div className="personal-details-total">
        <PersonalDetails />
        <h2>Account Type</h2>
        <AccountType />
        <h2>Adviser Initial Service Fee</h2>
        <AdviserDetails1 />
        <h2>Adviser Ongoing Service Fee</h2>
        <AdviserDetails2 />
        <h2>Adviser Details</h2>
        <AdviserDetails3 />

        <div>
          <h2>Account Balance</h2>
          <AccountBalance />
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
