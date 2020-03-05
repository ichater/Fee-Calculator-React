import React, { useState } from "react";
import SMA from "./Data/SMA";
// import CheckboxStyled from "./../Styled-Components/CheckboxStyled";

const SMAdisplay = props => {
  const { checkedSMA, setCheckedSMA } = props;
  const [searchSMA, setSearchSMA] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchInputChanges = e => {
    setSearchSMA(e.target.value);
  };
  //search through investments
  React.useEffect(() => {
    const results = SMA.map((sma, index) => ({ ...sma, id: index })).filter(
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
          {searchResults.map(investment => {
            return (
              <tr key={investment.id}>
                <td>
                  <label>
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
    </>
  );
};

export default SMAdisplay;
