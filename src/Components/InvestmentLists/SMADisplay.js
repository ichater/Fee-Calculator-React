import React, { useState, useEffect } from "react";
import SMA from "./Data/SMA";

const SMAdisplay = () => {
  const [searchSMA, setSearchSMA] = useState("");

  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchInputChanges = e => {
    setSearchSMA(e.target.value);
  };

  React.useEffect(() => {
    const results = SMA.filter(SMA =>
      SMA.Name.toLowerCase().includes(searchSMA)
    );
    setSearchResults(results);
  }, [searchSMA]);

  return (
    <>
      <div>
        <label> Search </label>
        <input
          type="text"
          value={searchSMA}
          onChange={handleSearchInputChanges}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>APIR</th>
            <th>Nab</th>
            <th>MER</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((investment, index) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" onClick={console.log("Hello!")} />
                </td>
                <td>{investment.Name}</td>
                <td>{investment.APIR}</td>
                <td>{investment.Nab}</td>
                <td>{investment.MER}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SMAdisplay;
