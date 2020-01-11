import React from "react";

const PersonalDetails = props => {
  const { name, surname, dob } = props;
  return (
    <div className="Details-grid">
      <span>Name:</span> {name} <span>Surname:</span> {surname}{" "}
      <span>DOB:</span>
      {dob}
    </div>
  );
};

export default PersonalDetails;
