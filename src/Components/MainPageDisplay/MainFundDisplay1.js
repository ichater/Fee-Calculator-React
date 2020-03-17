import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";

const FundDisplay = props => {
  const { mainRemoveFundSumbit } = useContext(InvestmentContext);
  const { FundName, APIR, NabOwned, MER, id } = props;
  return (
    <>
      <tr>
        <td>{FundName}</td>
        <td>{APIR}</td>
        <td>{NabOwned}</td>
        <td>{MER}</td>
        <td>
          %<input type="number"></input>
        </td>
        <td>
          $<input type="number"></input>
        </td>
        <td
          className="Main-Table-Delete"
          onClick={() => mainRemoveFundSumbit(id)}
        >
          &times;
        </td>
      </tr>
    </>
  );
};

export default FundDisplay;
