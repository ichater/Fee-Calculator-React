import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";
const SMAdisplay = props => {
  const { mainRemoveSMASumbit } = useContext(InvestmentContext);
  const { Name, APIR, Nab, MER, id } = props;

  return (
    <>
      <tr>
        <td>{Name}</td>
        <td>{APIR}</td>
        <td>{Nab}</td>
        <td>{MER}</td>
        <td>
          %<input type="number"></input>
        </td>
        <td>
          $<input type="number"></input>
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
