import React from "react";

const Main = ({ SMA }) => {
  return (
    <>
      <table className="investment-table__default">
        <tr>
          <th>Name</th>
          <th>APIR</th>
          <th>Nab</th>
          <th>MER</th>
          <th>% value</th>
          <th>$ value</th>
        </tr>

        {SMA.map(SMA => {
          return (
            <tr>
              <td>{SMA.Name}</td>
              <td>{SMA.APIR}</td>
              <td>{SMA.Nab}</td>
              <td>{SMA.MER}</td>
              <td>
                %<input type="number"></input>
              </td>
              <td>
                $<input type="number"></input>
              </td>
            </tr>
          );
        })}
      </table>

      <table className="investment-table__default">
        <tr>
          <th>Name</th>
          <th>APIR</th>
          <th>Nab</th>
          <th>MER</th>
          <th>% value</th>
          <th>$ value</th>
        </tr>
      </table>

      <table className="investment-table__default">
        <tr>
          <th>ASX</th>
          <th>name</th>
          <th>Category</th>
          <th>% value</th>
          <th>$ value</th>
        </tr>
      </table>
    </>
  );
};

export default Main;
