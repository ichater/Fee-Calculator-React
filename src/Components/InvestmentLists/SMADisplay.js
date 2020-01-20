import React, { useState } from "react";
import SMA from "./Data/SMA";
import uuidv4 from "uuid/v4";
import CheckboxStyled from "./../Styled-Components/CheckboxStyled";

const SMAdisplay = props => {
  const { setSelectSMA } = props;
  const [searchSMA, setSearchSMA] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchInputChanges = e => {
    setSearchSMA(e.target.value);
  };
  //search through investments
  React.useEffect(() => {
    const results = SMA.filter(
      SMA => SMA.Name.toLowerCase().includes(searchSMA),
      SMA => SMA.APIR.toLowerCase().includes(searchSMA),
      SMA => SMA.MER.includes(searchSMA)
    );
    setSearchResults(results);
  }, [searchSMA]);
  //Give each investment ID
  SMA.forEach(item => {
    item.id = uuidv4();
  });

  return (
    <>
      <div className="investment-searchdiv">
        <label> Search </label>
        <input
          type="text"
          value={searchSMA}
          onChange={handleSearchInputChanges}
        />
        <button onClick={() => setSelectSMA(true)}> Select investment</button>
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
              <tr key={investment.id}>
                <td>
                  <label>
                    <CheckboxStyled />
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
