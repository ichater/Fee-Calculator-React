import React from "react";
import MainSMAdisplay1 from "./MainSMAdisplay1";
import SMA from "./../InvestmentLists/Data/SMA";

const MainSMAdisplay = props => {
  const { checkedSMA, setCheckedSMA, SMA, selectSMA } = props;
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
          {SMA.map(SMA => {
            return <MainSMAdisplay1 key={SMA.id} {...SMA} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default MainSMAdisplay;
