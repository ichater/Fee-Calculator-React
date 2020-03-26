import React, { useState } from "react";
import AccountDetailsandSearch from "./MainPageDisplay/AccountDetailsandSearch";
import GroupInvestmentHeader from "./MainPageDisplay/GroupInvestmentHeader";
import MainShareDisplay from "./MainPageDisplay/MainShareDisplay";
import FeeTable from "./MainPageDisplay/FeeTable";
import MainPageCashAccount from "./MainPageDisplay/MainPageCashAccount";

const Main = () => {
  return (
    <>
      <AccountDetailsandSearch />
      <div className="main-page_grid">
        <div className="Main-table-Left">
          <div className="Main-Tables-Wrapper">
            <GroupInvestmentHeader />

            <MainShareDisplay />
            <MainPageCashAccount />
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
