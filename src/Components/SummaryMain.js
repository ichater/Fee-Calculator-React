import React from "react";
import PersonalDetails from "./Summary/PersonalDetails";
import AccountType from "./Summary/AccountType";
import AdviserInitialFee from "./Summary/AdviserInitialFee";
import AdviserOngoingFee from "./Summary/AdviserOngoingFee";

const SummaryMain = props => {
  const {
    name,
    surname,
    dob,
    accountType,
    adviserInitialFee$,
    adviserInitialFeeP
  } = props;
  return (
    <>
      <div>
        <PersonalDetails name={name} surname={surname} dob={dob} />
      </div>
      <div>
        <AccountType accountType={accountType} />
      </div>
      <div>
        <AdviserInitialFee
          adviserInitialFee$={adviserInitialFee$}
          adviserInitialFeeP={adviserInitialFeeP}
        />
      </div>
      <div>
        <AdviserOngoingFee />
      </div>
    </>
  );
};

export default SummaryMain;
