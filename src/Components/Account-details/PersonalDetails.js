import React from "react";

const PersonalDetails = () => {
  return (
    <>
      <h1>Fill out details Below</h1>
      <div className="personal-details__self">
        <label>Name:</label>
        <input type="text"></input>
        <label>Surname:</label>
        <input type="text"></input>
        <label>DOB:</label>
        <input type="number"></input>
      </div>
    </>
  );
};

export default PersonalDetails;
