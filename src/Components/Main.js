import React, { useState } from "react";
import AccountDetailsandSearch from "./MainPageDisplay/AccountDetailsandSearch";
import MainFundDisplay1 from "./MainPageDisplay/MainFundDisplay1";
import MainShareDisplay1 from "./MainPageDisplay/MainShareDisplay1";
import FeeTable from "./MainPageDisplay/FeeTable";
import MainSMAdisplay1 from "./MainPageDisplay/MainSMAdisplay1";
import MainSMAdisplay from "./MainPageDisplay/MainSMAdisplay";

const Main = ({ SMA, Shares, Funds }) => {
  const { balance, setBalance } = useState(0);

  return (
    <>
      <AccountDetailsandSearch setBalance={setBalance} />
      <div className="main-page_grid">
        <div className="Main-table-Left">
          <table className="investment-table__default">
            <tr>
              <th>Name</th>
              <th>APIR</th>
              <th>Nab</th>
              <th>MER</th>
              <th>% value</th>
              <th>$ value</th>
            </tr>
            {SMA.map(SMA => {
              return <MainSMAdisplay1 key={SMA.id} {...SMA} />;
            })}
          </table>

          <table className="investment-table__default">
            <tr>
              <th>Name</th>
              <th>APIR</th>
              <th>Nab</th>
              <th>MER</th>
              <th>% value</th>
              <th>$ value</th>
            </tr>
            {Funds.map(Funds => {
              return <MainFundDisplay1 key={Funds.id} {...Funds} />;
            })}
          </table>

          <table className="investment-table__default">
            <tr>
              <th>Name</th>
              <th>ASX</th>
              <th>Category</th>
              <th>% value</th>
              <th>$ value</th>
            </tr>
            {Shares.map(Shares => {
              return <MainShareDisplay1 key={Shares.id} {...Shares} />;
            })}
          </table>
        </div>
        <div className="investment-info_right">
          <FeeTable balance={balance} />
        </div>
      </div>
    </>
  );
};

export default Main;
