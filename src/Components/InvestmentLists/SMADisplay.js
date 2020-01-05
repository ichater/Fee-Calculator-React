import React, { useState } from "react";
import SMA from "./Data/SMA";

const SMAdisplay = () => {
  const [test, handleTest] = useState();

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
          {SMA.map((investment, index) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" onClick={console.log("Hello!")} />
                </td>
                <td>{investment.Name}</td>
                <td>{investment.APIR}</td>
                <td>{investment.Nab}</td>
                <td>{investment.MER}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SMAdisplay;
