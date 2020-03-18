import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";
const SMAdisplay = props => {
  const {
    mainRemoveSMASumbit,
    investmentValue,
    setInvestmentValue
  } = useContext(InvestmentContext);
  const { checkedSMA, Name, APIR, Nab, MER, id, value } = props;

  return (
    <>
      <tr>
        <td>{Name}</td>
        <td>{APIR}</td>
        <td>{Nab}</td>
        <td>
          {MER}({investmentValue})
        </td>
        <td>
          %<input type="number"></input>
        </td>
        <td>
          $
          <input
            type="number"
            onChange={e => {
              if (e.id === id) {
                setInvestmentValue(e.target.value);
              }
            }}
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
