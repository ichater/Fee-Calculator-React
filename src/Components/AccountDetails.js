import React from "react";
import PersonalDetails from "./Account-details/PersonalDetails";
import AdviserDetails1 from "./Account-details/AdviserDetails1";
import AdviserDetails2 from "./Account-details/AdviserDetails2";
import AccountType from "./Account-details/AccountType";
import AdviserDetails3 from "./Account-details/AdviserDetails3";

const AccountDetails = props => {
  const { setName, setSurname, setDob, setAccountType } = props;
  return (
    <>
      <div className="personal-details-total">
        <PersonalDetails
          setName={setName}
          setSurname={setSurname}
          setDob={setDob}
        />
        <h2>Account Type</h2>
        <AccountType setAccountType={setAccountType} />
        <AdviserDetails1 />
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
