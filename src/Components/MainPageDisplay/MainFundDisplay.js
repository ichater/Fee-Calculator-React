import React from "react";
import MainFundDisplay1 from "./MainFundDisplay1";

const MainFundDisplay = Fund => {
  return (
    <>
      <table className="investment-table__default">
        <tr>
          <th>Name</th>
          <th>APIR</th>
          <th>Nab</th>
          <th>MER</th>
          <th>% value</th>
          <th>$ value</th>
        </tr>
        {Fund.map(Fund => {
          return <MainFundDisplay1 key={Fund.id} {...Fund} />;
        })}
      </table>
    </>
  );
};

export default MainFundDisplay;
