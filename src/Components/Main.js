import React, { useState } from "react";
import AccountDetailsandSearch from "./MainPageDisplay/AccountDetailsandSearch";
import MainSMAdisplay from "./MainPageDisplay/MainSMAdisplay";
import MainFundDisplay from "./MainPageDisplay/MainFundDisplay";
import MainShareDisplay from "./MainPageDisplay/MainShareDisplay";
import FeeTable from "./MainPageDisplay/FeeTable";

const Main = props => {
  const [balance, setBalance] = useState(0);
  const {
    mainPageSMA,
    Shares,
    Funds,
    selectSMA,
    checkedSMA,
    setCheckedSMA,
    addSMA,
    setAddSMA
  } = props;

  return (
    <>
      <AccountDetailsandSearch setBalance={setBalance} />
      <div className="main-page_grid">
        <div className="Main-table-Left">
          <MainSMAdisplay
            mainPageSMA={mainPageSMA}
            selectSMA={selectSMA}
            setCheckedSMA={setCheckedSMA}
            checkedSMA={checkedSMA}
            addSMA={addSMA}
            setAddSMA={setAddSMA}
          />
          <MainFundDisplay Funds={Funds} />
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
