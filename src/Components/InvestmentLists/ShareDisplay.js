import React from "react";
import NavShares1 from "./Data/NavShares1";

const ShareDisplay = () => {
  return (
    <>
      <table>
        <tr>
          <th>Select</th>
          <th>ASX</th>
          <th>Name</th>
          <th>Category</th>
        </tr>
        {NavShares1.map((investment, index) => {
          return (
            <tr>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>{investment.ASXcode}</td>
              <td>{investment.ListedInvestmentName}</td>
              <td>{investment.Category}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default ShareDisplay;
