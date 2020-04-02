import React, { useState, useContext } from "react";
import NavShares1 from "./Data/NavShares1";
import { InvestmentContext } from "../../Context/InvestmentContext";
import MainShareDisplay from "../MainPageDisplay/MainShareDisplay";

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
      id: index,
      value: 0
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
      <div className="Two-fr-grid">
        <div className="Investment-select-wrapper">
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
                    <label className="Mlc-checkbox-container">
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
                      <span className="checkMark"></span>
                    </label>
                  </td>
                  <td>{investment1.ASXcode}</td>
                  <td>{investment1.ListedInvestmentName}</td>
                  <td>{investment1.Category}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="Investment-Selected-Wrapper">
          {!checkedShares.length && (
            <>
              <h2>Selected Investments will appear here</h2>

              <p>Investments can be deleted here or in the "main" heading</p>
            </>
          )}
          {checkedShares.length && (
            <>
              <h2> Slected Shares:</h2>
              <MainShareDisplay />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShareDisplay;
