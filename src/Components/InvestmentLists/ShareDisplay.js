import React, { useState, useContext } from "react";
import NavShares1 from "./Data/NavShares1";
import { InvestmentContext } from "../../Context/InvestmentContext";

const ShareDisplay = () => {
  const [searchShares, setSearchShares] = useState("");
  const { checkedShares, setCheckedShates } = useContext(InvestmentContext);
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchInputChanges = e => {
    setSearchShares(e.target.value);
  };

  React.useEffect(() => {
    const results = NavShares1.map((share, index) => ({
      ...share,
      id: index
    })).filter(
      NavShares1 => NavShares1.ASXcode.toLowerCase().includes(searchShares),
      NavShares1 =>
        NavShares1.ListedInvestmentName.toLowerCase().includes(searchShares),
      NavShares1 => NavShares1.Category.includes(searchShares)
    );
    setSearchResults(results);
  }, [searchShares]);

  return (
    <>
      <div className="investment-searchdiv">
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
        {searchResults.map(investment1 => {
          return (
            <tr>
              <td>
                <input
                  onChange={e => {
                    let checked = e.target.checked;
                    if (checked) {
                      setCheckedShates([...checkedShares, investment1]);
                    } else {
                      setCheckedShates(
                        checkedShares.filter(
                          checkedInvestment1 =>
                            checkedInvestment1.id !== investment1.id
                        )
                      );
                    }
                  }}
                  type="checkbox"
                  checked={checkedShares
                    .map(i => i.id)
                    .includes(investment1.id)}
                />
              </td>
              <td>{investment1.ASXcode}</td>
              <td>{investment1.ListedInvestmentName}</td>
              <td>{investment1.Category}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default ShareDisplay;
