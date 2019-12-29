import React from "react";
import SMA from "./Data/SMA";

const SMAdisplay = () => {
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
        {SMA.map((investment, index) => {
          return (
            <tr>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>{investment.Name}</td>
              <td>{investment.APIR}</td>
              <td>{investment.Nab}</td>
              <td>{investment.MER}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default SMAdisplay;
