import React from "react";

const FeeTable = props => {
  const { balance } = props;
  function tierOne(i) {
    const t1 = i * 0.004;
    if (t1 === 0) {
      return 0;
    } else if (t1 < 375 && t1 > 0) {
      return 375;
    } else if (t1 > 800) {
      return 800;
    } else {
      return t1;
    }
  }
  function tierTwo(i) {
    const t2 = (i - 200000) * 0.0015;
    if (i <= 200000) {
      return 0;
    } else if (i >= 200000 && i < 500000) {
      return t2;
    } else {
      return 450;
    }
  }

  function tierThree(i) {
    if (i < 500000) {
      return 0;
    } else if ((i - 500000) * 0.0003 > 1150) {
      return 1150;
    } else {
      return (i - 500000) * 0.0003;
    }
  }
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
