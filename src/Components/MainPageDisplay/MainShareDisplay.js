import React from "react";
import MainShareDisplay1 from "./MainShareDisplay1";

const MainShareDisplay = Shares => {
  return (
    <>
      <table className="investment-table__default">
        <tr>
          <th>ASX</th>
          <th>name</th>
          <th>Category</th>
          <th>% value</th>
          <th>$ value</th>
        </tr>
        {Shares.map(Shares => {
          return <MainShareDisplay1 key={Shares.id} {...Shares} />;
        })}
      </table>
    </>
  );
};

export default MainShareDisplay;
