import React from "react";
import MainSMAdisplay1 from "./MainSMAdisplay1";
import SMA from "./../InvestmentLists/Data/SMA";

const MainSMAdisplay = props => {
  const {
    checkedSMA,
    setCheckedSMA,
    SMA,
    selectSMA,
    addSMA,
    setAddSMA
  } = props;

  // const handlesetAddSMA = () => {
  //   const newSMA = {
  //     id: Math.random(1),
  //     Name: "test",
  //     APIR: "123fku",
  //     NAB: "#",
  //     NER: 0.9
  //   };
  //   setAddSMA(SMA.push(newSMA));
  // };
  console.log(SMA);
  return (
    <>
      {selectSMA && <div>HELLO WORLD!</div>}
      {/* <button onClick={handlesetAddSMA}>test</button> */}
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
          {SMA.map(SMA => {
            return (
              <MainSMAdisplay1
                key={SMA.id}
                {...SMA}
                setCheckedSMA={setCheckedSMA}
                checkedSMA={checkedSMA}
                addSMA={addSMA}
                setAddSMA={setAddSMA}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MainSMAdisplay;
