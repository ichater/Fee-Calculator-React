import React, { useContext } from "react";

import { InvestmentContext } from "../../Context/InvestmentContext";
import MainSMAdisplay from "./MainSMAdisplay";
import MainFundDisplay from "./MainFundDisplay";

const GroupInvestmentHeader = () => {
  const { checkedSMA, checkedMF } = useContext(InvestmentContext);
  const groupInvestments = checkedSMA.concat(checkedMF);

  return (
    <>
      {groupInvestments.length > 0 && (
        <>
          <div className="Margin-Top_20px">
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
                <MainSMAdisplay />
                <MainFundDisplay />
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default GroupInvestmentHeader;
