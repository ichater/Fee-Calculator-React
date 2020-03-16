import React, { useContext } from "react";
import { InvestmentContext } from "../../../Context/InvestmentContext";
import InSpecieExplained from "./InSpecieExplained";

const InspecieDisplay = ({ inSpecieMFs, inSpecieShares }) => {
  const {
    checkedShares,
    setCheckedShates,
    checkedMF,
    setCheckedMF,
    removeShareSumbit,
    removeFundSumbit
  } = useContext(InvestmentContext);
  return (
    <div className="InSpecie-Table_wrapper">
      {!inSpecieShares.length && !inSpecieMFs.length && <InSpecieExplained />}
      {inSpecieMFs.length && (
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
                    <input
                      onChange={e => {
                        let checked = e.target.checked;
                        if (checked) {
                          setCheckedMF([...checkedMF, fund]);
                        } else {
                          setCheckedMF(
                            checkedMF.filter(
                              checkedFund => checkedFund.id !== fund.id
                            )
                          );
                        }
                      }}
                      type="checkbox"
                      checked={checkedMF
                        .map(checkedFund => checkedFund.id)
                        .includes(fund.id)}
                    />
                  </td>
                  <td>{fund.FundName}</td>
                  <td>{fund.APIR}</td>
                  <td>{fund.NabOwned}</td>
                  <td>{fund.MER}</td>
                  <td
                    className="InSpecie-Delete"
                    onClick={() => removeFundSumbit(fund.id)}
                  >
                    &times;
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {inSpecieShares.length && (
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
                    <input
                      onChange={e => {
                        let checked = e.target.checked;
                        if (checked) {
                          setCheckedShates([...checkedShares, share]);
                        } else {
                          setCheckedShates(
                            checkedShares.filter(
                              checkedshare => checkedshare.id !== share.id
                            )
                          );
                        }
                      }}
                      type="checkbox"
                      checked={checkedShares.map(i => i.id).includes(share.id)}
                    />
                  </td>

                  <td>{share.ASXcode}</td>
                  <td>{share.ListedInvestmentName}</td>
                  <td>{share.Category}</td>
                  <td
                    className="InSpecie-Delete"
                    onClick={() => removeShareSumbit(share.id)}
                  >
                    &times;
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InspecieDisplay;
