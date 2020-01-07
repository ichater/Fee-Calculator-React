import React from "react";
import MainFundDisplay1 from "./MainFundDisplay1";

const MainFundDisplay = ({ Funds }) => {
  return (
    <>
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
          {Funds.map(Funds => {
            return <MainFundDisplay1 key={Funds.id} {...Funds} />;
          })}
        </table>
      </>
    </>
  );
};

export default MainFundDisplay;
