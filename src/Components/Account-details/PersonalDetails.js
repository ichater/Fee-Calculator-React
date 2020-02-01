import React from "react";

const PersonalDetails = props => {
  const { setName, setSurname, setDob, name, surname, dob } = props;
  return (
    <>
      <h2> Personal details</h2>
      <div className="personal-details__self">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
        <label>Surname:</label>
        <input
          type="text"
          onChange={e => setSurname(e.target.value)}
          value={surname}
        ></input>
        <label>DOB:</label>
        <input
          type="date"
          onChange={e => setDob(e.target.value)}
          value={dob}
        ></input>
      </div>
    </>
  );
};

export default PersonalDetails;
