import React from "react";
import MainSMAdisplay1 from "./MainSMAdisplay1";
import SMA from "./../InvestmentLists/Data/SMA";

const MainSMAdisplay = props => {
  const {
    checkedSMA,
    setCheckedSMA,
    mainPageSMA,
    setMainPageSMA,
    selectSMA,
    addSMA,
    setAddSMA
  } = props;

  //final SMAs appended

  for (let i = 0; i < SMA.length; i++) {
    if (SMA[i].id !== mainPageSMA[i]) {
      mainPageSMA.push(SMA[i]);
    }
  }
  return (
    <>
      {selectSMA && <div>HELLO WORLD!</div>}
      <table className="investment-table__default">
        <thead>
          <tr>
            <th>Name</th>
            <th>APIR</th>
            <th>Nab</th>
            <th>MER</th>
            <th>% value</th>
            <th>$ value</th>
          </tr>
        </thead>
        <tbody>
          {mainPageSMA.map(mainPageSMA => {
            return (
              <MainSMAdisplay1
                key={mainPageSMA.id}
                {...mainPageSMA}
                setCheckedSMA={setCheckedSMA}
                checkedSMA={checkedSMA}
                addSMA={addSMA}
                setAddSMA={setAddSMA}
                mainPageSMA={mainPageSMA}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MainSMAdisplay;
