import React from "react";
import MainSMAdisplay1 from "./MainSMAdisplay1";

const MainSMAdisplay = ({ SMA }) => {
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
        {SMA.map(SMA => {
          return <MainSMAdisplay1 key={SMA.id} {...SMA} />;
        })}
      </table>
    </>
  );
};

export default MainSMAdisplay;
