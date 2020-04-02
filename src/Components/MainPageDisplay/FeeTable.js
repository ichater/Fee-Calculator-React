import React, { useContext, useEffect } from "react";
import { MainPageContext } from "./../../Context/MainPageContext";
import { InvestmentContext } from "../../Context/InvestmentContext";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

const FeeTable = () => {
  const { t1, t2, t3, totalFee, setTotalFee, balance } = useContext(
    MainPageContext
  );
  const { listedFee, nabFee } = useContext(InvestmentContext);
  const { accountType } = useContext(SummaryDetailsContext);
  useEffect(() => {
    setTotalFee(parseFloat(t1) + parseFloat(t2) + parseFloat(t3));
  });

  const superFee = () => {
    if (accountType === "Pension" || accountType === "Super") {
      return (
        <tr>
          <td>Super admin fee</td>
          <td>0.025</td>
          <td>
            ${(balance / 100) * 0.025 > 600 ? 600 : (balance / 100) * 0.025}
          </td>
        </tr>
      );
    }
  };

  return (
    <>
      <table className="Fee-Table">
        <thead>
          <tr>
            <th>Account Balance</th>
            <th>Fee(%pa)</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First $200,000</td>
            <td>0.40</td>
            <td>${t1}</td>
          </tr>
          <tr>
            <td>Next $300,000</td>
            <td>0.15</td>
            <td>${t2}</td>
          </tr>
          <tr>
            <td>Remaining balance over $500,000 </td>
            <td>0.03</td>
            <td>${t3}</td>
          </tr>
          <tr>
            <td>Non-Nab group investments</td>
            <td>0.10</td>
            <td>${nabFee()}</td>
          </tr>
          <tr>
            <td>listed Investments</td>
            <td>0.15</td>
            <td>${listedFee()}</td>
          </tr>
          <tr>
            <td colSpan="2">Total Admin Fee:</td>
            <td>${totalFee}</td>
          </tr>
          {superFee()}
        </tbody>
      </table>
    </>
  );
};

export default FeeTable;
