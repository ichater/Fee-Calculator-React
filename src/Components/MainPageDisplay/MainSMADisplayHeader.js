import React, { useContext } from "react";

import { InvestmentContext } from "./../../Context/InvestmentContext";
import MainSMAdisplay from "./MainSMAdisplay";

const MainSMAdisplayHeader = () => {
  const { checkedSMA, investmentValue } = useContext(InvestmentContext);
  investmentValue(checkedSMA);
  return (
    <>
      {checkedSMA.length && (
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
              {/* <tbody>
                {checkedSMA.map(checkedSMA => {
                  return (
                    <MainSMAdisplay1 key={checkedSMA.id} {...checkedSMA} />
                  );
                })}
                
              </tbody> */}
              <MainSMAdisplay />
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default MainSMAdisplayHeader;
