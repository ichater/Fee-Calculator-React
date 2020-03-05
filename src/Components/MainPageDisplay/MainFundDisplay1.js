import React from "react";

const FundDisplay = props => {
  const { checkedMf } = props;
  return (
    <>
      <tr>
        <td>{checkedMf.FundName}</td>
        <td>{checkedMf.APIR}</td>
        <td>{checkedMf.Nab}</td>
        <td>{checkedMf.MER}</td>
        <td>
          %<input type="number"></input>
        </td>
        <td>
          $<input type="number"></input>
        </td>
      </tr>
    </>
  );
};

export default FundDisplay;
