import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const PersonalDetails = props => {
  const { name, surname, dob } = useContext(SummaryDetailsContext);
  return (
    <div className="Details-grid">
      <span>Name:</span> {name} <span>Surname:</span> {surname}{" "}
      <span>DOB:</span>
      {dob}
    </div>
  );
};

export default PersonalDetails;
