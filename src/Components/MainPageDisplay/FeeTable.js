import React, { useContext, useEffect } from "react";
import { MainPageContext } from "./../../Context/MainPageContext";

const FeeTable = () => {
  const { t1, t2, t3, totalFee, setTotalFee } = useContext(MainPageContext);
  useEffect(() => {
    setTotalFee(t1 + t2 + t3);
  });
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
            <td>{t1}</td>
          </tr>
          <tr>
            <td>Next $300,000</td>
            <td>0.15</td>
            <td>{t2}</td>
          </tr>
          <tr>
            <td>Remaining balance over $500,000 </td>
            <td>0.03</td>
            <td>{t3}</td>
          </tr>
          <tr>
            <td>Non-Nab group investments</td>
            <td>0.10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>listed Investments</td>
            <td>0.15</td>
            <td>0</td>
          </tr>
          <tr>
            <td colSpan="2">Total Fee:</td>
            <td>{totalFee}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FeeTable;
