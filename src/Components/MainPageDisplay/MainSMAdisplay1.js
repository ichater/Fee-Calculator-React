import React from "react";
import SMA from "./../InvestmentLists/Data/SMA";

const SMAdisplay = props => {
  const {
    Name,
    APIR,
    Nab,
    MER,
    id,
    checkedSMA,
    setCheckedSMA,
    addSMA,
    setAddSMA,
    mainPageSMA
  } = props;

  return (
    <>
      <tr>
        <td>{id}</td>
        {/* <td>{Name}</td> */}
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
