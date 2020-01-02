import React from "react";

const ShareDisplay = props => {
  const { ASXcode, ListedInvestmentName, Category } = props;
  return (
    <>
      <tr>
        <td>{ListedInvestmentName}</td>
        <td>{ASXcode}</td>
        <td>{Category}</td>
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

export default ShareDisplay;
