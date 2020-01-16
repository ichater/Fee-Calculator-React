import React, { useState } from "react";
import NAVMFs from "./Data/NAVMFs";

const FundDisplay = () => {
  const [searchFunds, setSearchFunds] = useState("");

  const [searchResults1, setSearchResults1] = React.useState([]);

  const handleSearchInputChanges = e => {
    setSearchFunds(e.target.value);
  };

  React.useEffect(() => {
    const results = NAVMFs.filter(
      NAVMFs => NAVMFs.FundName.toLowerCase().includes(searchFunds),
      NAVMFs =>
        NAVMFs.APIR.toString()
          .toLowerCase()
          .includes(searchFunds),
      NAVMFs => NAVMFs.MER.toLowerCase().includes(searchFunds)
    );
    setSearchResults1(results);
  }, [searchFunds]);
  return (
    <>
      <div className="investment-searchdiv">
        <label> Search </label>
        <input
          type="text"
          value={searchFunds}
          onChange={handleSearchInputChanges}
        ></input>
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
          {searchResults1.map(funds => {
            return (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{funds.FundName}</td>
                <td>{funds.APIR}</td>
                <td>{funds.NabOwned}</td>
                <td>{funds.MER}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FundDisplay;
