import React, { useState, useContext } from "react";
import NAVMFs from "./Data/NAVMFs";
import { InvestmentContext } from "../../Context/InvestmentContext";
import MainFundDisplay from "../MainPageDisplay/MainFundDisplay";

const FundDisplay = () => {
  const [searchFunds, setSearchFunds] = useState("");
  const [searchResults1, setSearchResults1] = React.useState([]);
  const { checkedMF, setCheckedMF } = useContext(InvestmentContext);

  const handleSearchInputChanges = e => {
    setSearchFunds(e.target.value);
  };

  React.useEffect(() => {
    const results = NAVMFs.map((fund, index) => ({
      ...fund,
      id: index,
      value: 0
    })).filter(
      NAVMFs => NAVMFs.FundName.toLowerCase().includes(searchFunds),
      NAVMFs =>
        NAVMFs.APIR.toString()
          .toLowerCase()
          .includes(searchFunds),
      NAVMFs => NAVMFs.MER.toLowerCase().includes(searchFunds)
    );
    setSearchResults1(results);
  }, [searchFunds]);

  console.log(checkedMF);
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
      <div className="Two-fr-grid">
        <div className="Investment-select-wrapper">
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
              {searchResults1.map(fund => {
                return (
                  <tr key={fund.id}>
                    <td>
                      <label>
                        <input
                          onChange={e => {
                            let checked = e.target.checked;
                            if (checked) {
                              setCheckedMF([...checkedMF, fund]);
                            } else {
                              setCheckedMF(
                                checkedMF.filter(
                                  checkedFund => checkedFund.id !== fund.id
                                )
                              );
                            }
                          }}
                          type="checkbox"
                          checked={checkedMF
                            .map(checkedFund => checkedFund.id)
                            .includes(fund.id)}
                        />
                      </label>
                    </td>
                    <td>{fund.FundName} </td>
                    <td>{fund.APIR}</td>
                    <td>{fund.NabOwned}</td>
                    <td>{fund.MER}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="Investment-Selected-Wrapper">
          {!checkedMF.length && (
            <>
              <h2>Selected Investments will appear here</h2>

              <p>Investments can be deleted here or in the "main" heading</p>
            </>
          )}
          {checkedMF.length && (
            <>
              <h2> Slected Funds:</h2>
              <table className="investment-table__default">
                <MainFundDisplay />
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FundDisplay;
