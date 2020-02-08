import React from "react";

const InspecieDisplay = ({ inSpecieMFs, inSpecieShares }) => {
  return (
    <>
      <table className="investment-table__default">
        <thead>
          <tr>
            <th>Name</th>
            <th>APIR</th>
            <th>Nab</th>
            <th>MER</th>
          </tr>
        </thead>
        <tbody>
          {inSpecieMFs.map(fund => {
            return (
              <tr key={fund.id}>
                {/* <td>
                  <input type="checkbox" />
                </td> */}
                <td>{fund.mfName}</td>
                <td>{fund.mfAPIR}</td>
                <td>{fund.nabOwned}</td>
                <td>{fund.mfMER}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className="investment-table__default">
        <thead>
          <tr>
            <th>ASX</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {inSpecieShares.map(share => {
            return (
              <tr key={share.id}>
                <td>{share.ASX}</td>
                <td>{share.shareName}</td>
                <td>{share.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default InspecieDisplay;
