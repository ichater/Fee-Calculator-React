import React from "react";
import AccountDetailsandSearch from "./MainPageDisplay/AccountDetailsandSearch";
import GroupInvestmentHeader from "./MainPageDisplay/GroupInvestmentHeader";
import MainShareDisplay from "./MainPageDisplay/MainShareDisplay";
import FeeTable from "./MainPageDisplay/FeeTable";
import MainPageCashAccount from "./MainPageDisplay/MainPageCashAccount";
import AccountTypeDisplay from "./MainPageDisplay/AccountTypeDisplay";

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
          <AccountTypeDisplay />
        </div>
      </div>
    </>
  );
};

export default Main;
