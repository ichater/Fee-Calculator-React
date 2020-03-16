import React, { useContext } from "react";
import MainSMAdisplay1 from "./MainSMAdisplay1";
import { InvestmentContext } from "./../../Context/InvestmentContext";

const MainSMAdisplay = () => {
  const { checkedSMA } = useContext(InvestmentContext);

  return (
    <>
      {checkedSMA.length && (
        <>
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
              {checkedSMA.map(checkedSMA => {
                return <MainSMAdisplay1 key={checkedSMA.id} {...checkedSMA} />;
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default MainSMAdisplay;
