import React from "react";
import SMA from "./../InvestmentLists/Data/SMA";

const SMAdisplay = props => {
  const {
    Name,
    APIR,
    Nab,
    MER,
    checkedSMA,
    setCheckedSMA,
    addSMA,
    setAddSMA
  } = props;

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
      </tr>
    </>
  );
};

export default SMAdisplay;
