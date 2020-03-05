import React from "react";
import MainFundDisplay1 from "./MainFundDisplay1";

const MainFundDisplay = props => {
  const { checkedMf } = props;
  console.log(checkedMf);
  return (
    <>
      {/* {checkedMf.length && ( */}
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
          {/* <tbody>
            {checkedMf.map(checkedMf => {
              return <MainFundDisplay1 key={checkedMf.id} {...checkedMf} />;
            })}
          </tbody> */}
        </table>
      </>
      {/* )} */}
    </>
  );
};

export default MainFundDisplay;
