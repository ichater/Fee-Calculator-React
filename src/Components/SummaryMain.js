import React from "react";
import PersonalDetails from "./Summary/PersonalDetails";

const SummaryMain = props => {
  const { name, surname, dob } = props;
  return (
    <>
      <PersonalDetails name={name} surname={surname} dob={dob} />
    </>
  );
};

export default SummaryMain;
