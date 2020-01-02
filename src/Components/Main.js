import React from "react";
import AccountDetailsandSearch from "./MainPageDisplay/AccountDetailsandSearch";
import MainFundDisplay from "./MainPageDisplay/MainFundDisplay";
import MainShareDisplay from "./MainPageDisplay/MainShareDisplay";
import FeeTable from "./MainPageDisplay/FeeTable";
import MainSMAdisplay1 from "./MainPageDisplay/MainSMAdisplay1";
import MainSMAdisplay from "./MainPageDisplay/MainSMAdisplay";

const Main = ({ SMA, Shares, Funds }) => {
  const tieredFee = [
    balance,
    tierOne
    // tierTwo,
    // tierThree,
    // totalFee
  ];

  function tierOne(balance) {
    if (balance * 0.4 < 375) {
      return 375;
    } else if (balance * 0.4 > 8000) {
      return 8000;
    } else {
      return balance * 0.04;
    }
  }

  function balance(input) {
    balance = input.value;
  }
  return (
    <>
      <AccountDetailsandSearch tieredFee={tieredFee} />
      <div className="main-page_grid">
        <div className="Main-table-Left">
          {/* <MainSMAdisplay SMA={SMA} />
          <MainFundDisplay Funds={Funds} />
          
          <MainShareDisplay Shares={Shares} /> */}
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

          {/* <MainSMAdisplay SMA={SMA} /> */}

          {/* <table className="investment-table__default">
            <tr>
              <th>ASX</th>
              <th>name</th>
              <th>Category</th>
              <th>% value</th>
              <th>$ value</th>
            </tr>
            {Shares.map(Shares => {
              return <MainShareDisplay key={Shares.id} {...Shares} />;
            })}
          </table> */}
        </div>
        <div className="investment-info_right">
          <FeeTable tieredFee={tieredFee} />
        </div>
      </div>
    </>
  );
};

export default Main;
