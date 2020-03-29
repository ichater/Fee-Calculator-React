import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";
import PensionFacility from "./PensionFacility";
export default function AccountTypeDisplay() {
  const { accountType } = useContext(SummaryDetailsContext);

  const displayAccount = () => {
    if (accountType == "Pension") {
      return <PensionFacility />;
    }
  };

  return (
    <div className="Pension-Facility_Wrapper">
      {" "}
      {/* <PensionFacility /> */}
      {displayAccount()}
    </div>
  );
}
