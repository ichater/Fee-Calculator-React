import React from "react";
import NAVMFs from "./Data/NAVMFs";

const FundDisplay = () => {
  return (
    <>
      <table>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>APIR</th>
          <th>Nab</th>
          <th>MER</th>
        </tr>
        {NAVMFs.map((funds, index) => {
          return (
            <tr>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>{funds.FundName}</td>
              <td>{funds.APIR}</td>
              <td>{funds.NabOwned}</td>
              <td>{funds.MER}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default FundDisplay;
