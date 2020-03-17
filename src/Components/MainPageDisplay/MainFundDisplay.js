import React, { useContext } from "react";
import MainFundDisplay1 from "./MainFundDisplay1";
import { InvestmentContext } from "../../Context/InvestmentContext";

const MainFundDisplay = props => {
  const { checkedMF } = useContext(InvestmentContext);

  return (
    <>
      {checkedMF.length && (
        <>
          <table className="investment-table__default">
            <tbody>
              {checkedMF.map(checkedMF => {
                return <MainFundDisplay1 key={checkedMF.id} {...checkedMF} />;
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default MainFundDisplay;
