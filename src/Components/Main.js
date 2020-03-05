import React, { useState } from "react";
import AccountDetailsandSearch from "./MainPageDisplay/AccountDetailsandSearch";
import MainSMAdisplay from "./MainPageDisplay/MainSMAdisplay";
import MainFundDisplay from "./MainPageDisplay/MainFundDisplay";
import MainShareDisplay from "./MainPageDisplay/MainShareDisplay";
import FeeTable from "./MainPageDisplay/FeeTable";

const Main = props => {
  const [balance, setBalance] = useState(0);
  const { Shares, checkedSMA, checkedMF } = props;
  // console.log(checkedMF);
  return (
    <>
      <AccountDetailsandSearch setBalance={setBalance} />
      <div className="main-page_grid">
        <div className="Main-table-Left">
          <MainSMAdisplay checkedSMA={checkedSMA} checkedMF={checkedMF} />
          <MainFundDisplay checkedSMA={checkedSMA} checkedMF={checkedMF} />
          <MainShareDisplay Shares={Shares} />
        </div>
        <div className="investment-info_right">
          <FeeTable balance={balance} />
        </div>
      </div>
    </>
  );
};

export default Main;
