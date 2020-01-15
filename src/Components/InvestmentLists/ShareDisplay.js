import React, { useState } from "react";
import NavShares1 from "./Data/NavShares1";

const ShareDisplay = () => {
  const [searchShares, setSearchShares] = useState("");

  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchInputChanges = e => {
    setSearchShares(e.target.value);
  };

  React.useEffect(() => {
    const results = NavShares1.filter(
      NavShares1 => NavShares1.ASXcode.toLowerCase().includes(searchShares),
      NavShares1 =>
        NavShares1.ListedInvestmentName.toLowerCase().includes(searchShares),
      NavShares1 => NavShares1.Category.includes(searchShares)
    );
    setSearchResults(results);
  }, [searchShares]);

  return (
    <>
      <div>
        <label> Search </label>
        <input
          type="text"
          value={searchShares}
          onChange={handleSearchInputChanges}
        ></input>
      </div>
      <table>
        <tr>
          <th>Select</th>
          <th>ASX</th>
          <th>Name</th>
          <th>Category</th>
        </tr>
        {searchResults.map(investment => {
          return (
            <tr>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>{investment.ASXcode}</td>
              <td>{investment.ListedInvestmentName}</td>
              <td>{investment.Category}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default ShareDisplay;
