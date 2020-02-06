import React from "react";
import MainFundDisplay1 from "./MainFundDisplay1";
import ThemeContext from "../../Context/ThemeContext";

const MainFundDisplay = ({ Funds }) => {
  return (
    <>
      <table className="investment-table__default">
        <thead>
          <tr>
            <th>Name</th>
            <th>APIR</th>
            <th>Nab</th>
            <th>MER</th>
            <th>% value</th>
            <th>$ value</th>
          </tr>
        </thead>
        <tbody>
          {Funds.map(Funds => {
            return <MainFundDisplay1 key={Funds.id} {...Funds} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default MainFundDisplay;
