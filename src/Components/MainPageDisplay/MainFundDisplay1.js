import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";
import { MainPageContext } from "../../Context/MainPageContext";

const FundDisplay = props => {
  const { balance } = useContext(MainPageContext);
  const { mainRemoveFundSumbit, checkedMF, setCheckedMF } = useContext(
    InvestmentContext
  );
  const { FundName, APIR, NabOwned, MER, id, value } = props;
  const handleUpdate1 = (id, value) => {
    const itemsCopy = [...checkedMF];
    const index = itemsCopy.findIndex(item => item.id === id);
    itemsCopy[index].value = value;
    setCheckedMF(itemsCopy);
  };
  return (
    <>
      <tr>
        <td>{FundName}</td>
        <td>{APIR}</td>
        <td>{NabOwned}</td>
        <td>
          {MER}
          <div>(${((value / 100) * MER).toFixed(2)})</div>
        </td>
        <td>{((value / balance) * 100).toFixed(2)} %</td>

        <td>
          $
          <input
            type="number"
            onChange={e => handleUpdate1(id, e.target.value)}
          ></input>
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
