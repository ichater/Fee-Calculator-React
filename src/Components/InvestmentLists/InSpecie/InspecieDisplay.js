import React from "react";

const InspecieDisplay = ({ inSpecieMFs, inSpecieShares }) => {
  return (
    <div className="InSpecie-Table_wrapper">
      <table className="InSpecie-MF_table">
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
          {inSpecieMFs.map(fund => {
            return (
              <tr key={fund.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{fund.mfName}</td>
                <td>{fund.mfAPIR}</td>
                <td>{fund.nabOwned}</td>
                <td>{fund.mfMER}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className="InSpecie-Shares_table">
        <thead>
          <tr>
            <th>Select</th>
            <th>ASX</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {inSpecieShares.map(share => {
            return (
              <tr key={share.id}>
                <td>
                  <input type="checkbox" />
                </td>

                <td>{share.ASXcode}</td>
                <td>{share.ListedInvestmentName}</td>
                <td>{share.Category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InspecieDisplay;
