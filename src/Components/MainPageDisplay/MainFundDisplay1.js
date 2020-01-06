import React from "react";

const FundDisplay = props => {
  const { FundName, APIR, Nab, MER } = props;
  return (
    <>
      <tr>
        <td>{FundName}</td>
        <td>{APIR}</td>
        <td>{Nab}</td>
        <td>{MER}</td>
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