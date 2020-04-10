import React, { useState, useContext } from "react";
import SMA from "./Data/SMA";
import { InvestmentContext } from "./../../Context/InvestmentContext";
import MainSMAdisplay from "../MainPageDisplay/MainSMAdisplay";

const SMAdisplay = () => {
  const { checkedSMA, setCheckedSMA } = useContext(InvestmentContext);
  const [searchSMA, setSearchSMA] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchInputChanges = e => {
    setSearchSMA(e.target.value);
  };
  //search through investments
  React.useEffect(() => {
    const results = SMA.map((sma, index) => ({
      ...sma,
      id: index,
      value: 0
    })).filter(
      SMA => SMA.Name.toLowerCase().includes(searchSMA),
      SMA => SMA.APIR.toLowerCase().includes(searchSMA),
      SMA => SMA.MER.includes(searchSMA)
    );
    setSearchResults(results);
  }, [searchSMA]);

  return (
    <>
      <div className="investment-searchdiv">
        <label> Search </label>
        <input
          type="text"
          value={searchSMA}
          onChange={handleSearchInputChanges}
        />
      </div>
      <div className="Two-fr-grid">
        <div className="Investment-select-wrapper1">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>APIR</th>
                <th>Nab</th>
                <th>MER</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map(investment => {
                return (
                  <tr key={investment.id}>
                    <td>
                      <label className="Mlc-checkbox-container">
                        <input
                          onChange={e => {
                            let checked = e.target.checked;
                            if (checked) {
                              setCheckedSMA([...checkedSMA, investment]);
                            } else {
                              setCheckedSMA(
                                checkedSMA.filter(
                                  checkedInvestment =>
                                    checkedInvestment.id !== investment.id
                                )
                              );
                            }
                          }}
                          type="checkbox"
                          //the .includes() implicitly contains the boolean "true"
                          checked={checkedSMA
                            .map(checkedInvestment => checkedInvestment.id)
                            .includes(investment.id)}
                        />
                        <span className="checkMark"></span>
                      </label>
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
        </div>
        <div className="Investment-Selected-Wrapper">
          {!checkedSMA.length && (
            <>
              <h2>Selected Investments will appear here</h2>

              <p>Investments can be deleted here or in the "main" heading</p>
            </>
          )}
          {checkedSMA.length && (
            <>
              <h2> Slected SMAs:</h2>
              <div className="Margin-Top_20px">
                <table className="investment-table__default">
                  <MainSMAdisplay />
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SMAdisplay;
