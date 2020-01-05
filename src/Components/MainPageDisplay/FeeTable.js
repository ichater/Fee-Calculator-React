import React from "react";
import {
  tierOne,
  tierTwo,
  tierThree
} from "./../FunctionExports/TieredFeeCalc";

const FeeTable = props => {
  const { balance } = props;
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
          <td>{tierOne(balance)}</td>
        </tr>
        <tr>
          <td>Next $300,000</td>
          <td>0.15</td>
          <td>{tierTwo(balance)}</td>
        </tr>
        <tr>
          <td>Remaining balance over $500,000 </td>
          <td>0.03</td>
          <td>{tierThree(balance)}</td>
        </tr>
        <tr>
          <td colspan="2">Total:</td>
          <td>{tierOne(balance) + tierTwo(balance) + tierThree(balance)}</td>
        </tr>
      </table>
    </>
  );
};

export default FeeTable;
