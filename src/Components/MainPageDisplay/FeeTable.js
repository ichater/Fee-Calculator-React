import React from "react";

const FeeTable = props => {
  const { balance, tierOne } = props;
  return (
    <>
      <table>
        <tr>
          <th>Account Balance</th>
          <th>Fee(%pa)</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>First $200,000</td>
          <td>0.40</td>
          <td>{balance}</td>
        </tr>
        <tr>
          <td>Next $300,000</td>
          <td>0.15</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Remaining balance over $500,000 </td>
          <td>0.03</td>
          <td>0</td>
        </tr>
        <tr>
          <td colspan="2">Total:</td>
          <td>0</td>
        </tr>
      </table>
    </>
  );
};

export default FeeTable;
