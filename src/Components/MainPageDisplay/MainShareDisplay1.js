import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";

const ShareDisplay = props => {
  const { mainRemoveShareSumbit } = useContext(InvestmentContext);
  const { ASXcode, ListedInvestmentName, Category, id } = props;
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
        <td
          className="Main-Table-Delete"
          onClick={() => mainRemoveShareSumbit(id)}
        >
          &times;
        </td>
      </tr>
    </>
  );
};

export default ShareDisplay;
