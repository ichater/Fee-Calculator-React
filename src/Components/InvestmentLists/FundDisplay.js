import React from "react";
import NAVMFs from "./Data/NAVMFs";

const FundDisplay = () => {
  return (
    <>
      <div>
        <label> Search </label>
        <input type="text"></input>
      </div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>APIR</th>
            <th>Nab</th>
            <th>MER</th>
          </tr>
        </thead>
        <tbody>
          {NAVMFs.map((funds, index) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{funds.FundName}</td>
                <td>{funds.APIR}</td>
                <td>{funds.NabOwned}</td>
                <td>{funds.MER}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FundDisplay;
