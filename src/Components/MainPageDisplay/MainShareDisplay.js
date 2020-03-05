import React from "react";
import MainShareDisplay1 from "./MainShareDisplay1";

const MainShareDisplay = ({ Shares }) => {
  return (
    <>
      {" "}
      <table className="investment-table__default">
        <thead>
          <tr>
            <th>Name</th>
            <th>ASX</th>
            <th>Category</th>
            <th>% value</th>
            <th>$ value</th>
          </tr>
        </thead>
        <tbody>
          {Shares.map(Shares => {
            return <MainShareDisplay1 key={Shares.id} {...Shares} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default MainShareDisplay;
