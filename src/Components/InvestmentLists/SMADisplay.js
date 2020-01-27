import React, { useState } from "react";
import SMA from "./Data/SMA";
// import CheckboxStyled from "./../Styled-Components/CheckboxStyled";

const SMAdisplay = props => {
  const { checkedSMA, setCheckedSMA, setAddSMA, addSMA, mainPageSMA } = props;
  const [searchSMA, setSearchSMA] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  // const [checkedSMA, setCheckedSMA] = useState([]);

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

  const handlesetAddSMA = () => {
    Array.prototype.push.apply(mainPageSMA, checkedSMA);
    // for (let i = 0; i < SMA.length; i++) {
    //   if (SMA[i].id !== mainPageSMA[i]) {
    //     console.log(SMA[i]);
    //   }
    // }
  };

  return (
    <>
      <div className="investment-searchdiv">
        <label> Search </label>
        <input
          type="text"
          value={searchSMA}
          onChange={handleSearchInputChanges}
        />
        <button onClick={handlesetAddSMA}> Select investment</button>
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
                    {/* <CheckboxStyled /> */}
                    <input
                      onChange={e => {
                        let checked = e.target.checked;
                        if (checked) {
                          setCheckedSMA([...checkedSMA, investment.id]);
                        } else {
                          setCheckedSMA(
                            //checkedSMA stats just
                            checkedSMA.filter(id => id !== investment.id)
                          );
                        }
                      }}
                      type="checkbox"
                      //the .includes() implicitly contains the boolean "true"
                      checked={checkedSMA.includes(investment.id)}
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
