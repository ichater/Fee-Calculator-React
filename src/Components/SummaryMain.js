import React from "react";
import PersonalDetails from "./Summary/PersonalDetails";
import AccountType from "./Summary/AccountType";
import AdviserInitialFee from "./Summary/AdviserInitialFee";
import AdviserOngoingFee from "./Summary/AdviserOngoingFee";
import AdviserDetails from "./Summary/AdviserDetails";

const SummaryMain = props => {
  const {
    name,
    surname,
    dob,
    accountType,
    adviserInitialFee$,
    adviserInitialFeeP,
    adviserOngoingFee$,
    adviserOngoingFeeP,
    adviserOngoingFeeIncrease,
    cpi,
    adviserName,
    adviserCode,
    dealerGroup
  } = props;
  return (
    <div className="summaryMain-grid">
      <h1>Account Summary</h1>
      <div>
        <PersonalDetails name={name} surname={surname} dob={dob} />
      </div>
      <div>
        <AccountType accountType={accountType} />
      </div>
      <div className="Details-grid_adviser">
        <AdviserInitialFee
          adviserInitialFee$={adviserInitialFee$}
          adviserInitialFeeP={adviserInitialFeeP}
        />
      </div>
      <div className="Details-grid_adviser">
        <AdviserOngoingFee
          adviserOngoingFee$={adviserOngoingFee$}
          adviserOngoingFeeP={adviserOngoingFeeP}
          adviserOngoingFeeIncrease={adviserOngoingFeeIncrease}
          cpi={cpi}
        />
      </div>
      <div>
        <AdviserDetails
          adviserName={adviserName}
          adviserCode={adviserCode}
          dealerGroup={dealerGroup}
        />
      </div>
    </div>
  );
};

export default SummaryMain;
