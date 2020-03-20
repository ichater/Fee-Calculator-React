import React from "react";
import PersonalDetails from "./Summary/PersonalDetails";
import AccountType from "./Summary/AccountType";
import AdviserInitialFee from "./Summary/AdviserInitialFee";
import AdviserOngoingFee from "./Summary/AdviserOngoingFee";
import AdviserDetails from "./Summary/AdviserDetails";

const SummaryMain = () => {
  return (
    <div className="summaryMain-grid">
      <h1>Account Summary</h1>
      <div>
        <PersonalDetails />
      </div>
      <div>
        <AccountType />
      </div>
      <div className="Details-grid_adviser">
        <AdviserInitialFee />
      </div>
      <div className="Details-grid_adviser">
        <AdviserOngoingFee />
      </div>
      <div>
        <AdviserDetails />
      </div>
    </div>
  );
};

export default SummaryMain;
