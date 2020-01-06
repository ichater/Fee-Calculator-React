import React from "react";

const PersonalDetails = props => {
  const { name, surname, dob } = props;
  return (
    <>
      Name: {name} Surname: {surname} DOB:{dob}
    </>
  );
};

export default PersonalDetails;
