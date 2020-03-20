import React, { useState } from "react";
import AccountDetailsandSearch from "./MainPageDisplay/AccountDetailsandSearch";
import MainSMAdisplayHeader from "./MainPageDisplay/MainSMADisplayHeader";
import MainFundDisplay from "./MainPageDisplay/MainFundDisplay";
import MainShareDisplay from "./MainPageDisplay/MainShareDisplay";
import FeeTable from "./MainPageDisplay/FeeTable";

const Main = () => {
  return (
    <>
      <AccountDetailsandSearch />
      <div className="main-page_grid">
        <div className="Main-table-Left">
          <div className="Main-Tables-Wrapper">
            <MainSMAdisplayHeader />
            <MainFundDisplay />
            <MainShareDisplay />
          </div>
        </div>
        <div className="investment-info_right">
          <FeeTable />
        </div>
      </div>
    </>
  );
};

export default Main;
