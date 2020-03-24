import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";
import { MainPageContext } from "../../Context/MainPageContext";
const SMAdisplay = props => {
  const { mainRemoveSMASumbit } = useContext(InvestmentContext);
  const { balance } = useContext(MainPageContext);
  const { Name, APIR, Nab, MER, id, value, checkedSMA, handleUpdate } = props;

  return (
    <>
      <tr>
        <td>{Name}</td>
        <td>{APIR}</td>
        <td>{Nab}</td>
        <td>
          {MER}
          <div>(${((value / 100) * MER).toFixed(2)})</div>
        </td>
        <td>{((value / balance) * 100).toFixed(2)} %</td>
        <td>
          $
          <input
            type="number"
            onChange={e => handleUpdate(id, e.target.value)}
            value={value}
            placeholder={value}
          ></input>
        </td>
        <td
          className="Main-Table-Delete"
          onClick={() => mainRemoveSMASumbit(id)}
        >
          &times;
        </td>
      </tr>
    </>
  );
};

export default SMAdisplay;
