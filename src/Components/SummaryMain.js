import React from "react";
import PersonalDetails from "./Summary/PersonalDetails";
import AccountType from "./Summary/AccountType";

const SummaryMain = props => {
  const { name, surname, dob, accountType } = props;
  return (
    <>
      <div>
        <PersonalDetails name={name} surname={surname} dob={dob} />
      </div>
      <AccountType accountType={accountType} />
    </>
  );
};

export default SummaryMain;
