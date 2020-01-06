import React from "react";

const PersonalDetails = props => {
  const { setName, setSurname, setDob } = props;
  return (
    <>
      <h1>Fill out details Below</h1>
      <div className="personal-details__self">
        <label>Name:</label>
        <input type="text" onChange={e => setName(e.target.value)}></input>
        <label>Surname:</label>
        <input type="text" onChange={e => setSurname(e.target.value)}></input>
        <label>DOB:</label>
        <input type="date" onChange={e => setDob(e.target.value)}></input>
      </div>
    </>
  );
};

export default PersonalDetails;
