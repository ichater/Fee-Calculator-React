import React, { useContext } from "react";
import MainShareDisplay1 from "./MainShareDisplay1";
import { InvestmentContext } from "../../Context/InvestmentContext";

const MainShareDisplay = () => {
  const { checkedShares } = useContext(InvestmentContext);
  return (
    <>
      {checkedShares.length && (
        <>
          {" "}
          <table className="investment-table__default">
            <thead>
              <tr>
                <th>Name</th>
                <th>ASX</th>
                <th>Category</th>
                <th>% value</th>
                <th>$ value</th>
              </tr>
            </thead>
            <tbody>
              {checkedShares.map(checkedShares => {
                return (
                  <MainShareDisplay1
                    key={checkedShares.id}
                    {...checkedShares}
                  />
                );
              })}
            </tbody>
          </table>{" "}
        </>
      )}
    </>
  );
};

export default MainShareDisplay;
