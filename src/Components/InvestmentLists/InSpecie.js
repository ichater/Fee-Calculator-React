import React, { useState } from "react";
import InspecieDisplay from "./InSpecie/InspecieDisplay";
import InSpecieMF from "./InSpecie/InSpecieMF";
import InSpecieShares from "./InSpecie/InSpecieShares";
import InSpecieHeader from "./InSpecie/InSpecieHeader";
import uuid from "uuid/v4";

const InSpecie = () => {
  const [showShares, setShowShares] = useState(false);
  const [showMFs, setShowMFs] = useState(false);
  const [inSpecieMFs, setInSpecieMFs] = useState([]);
  const [inSpecieShares, setInSpecieShares] = useState([]);

  const addFundSubmit = (mfName, mfAPIR, nabOwned, mfMER) => {
    setInSpecieMFs([
      ...inSpecieMFs,
      { mfName, mfAPIR, nabOwned, mfMER, id: uuid() }
    ]);
    console.log(inSpecieMFs);
  };
  const addShareSubmit = (shareName, ASX, category) => {
    setInSpecieShares([
      ...inSpecieShares,
      { shareName, ASX, category, id: uuid() }
    ]);
    console.log(inSpecieShares);
  };
  return (
    <>
      <InSpecieHeader />
      <div className="In-Specie-Page-Wrapper">
        <div className="In-specie-Display-Wrapper">
          <InspecieDisplay
            inSpecieMFs={inSpecieMFs}
            inSpecieShares={inSpecieShares}
          />
        </div>
        <div>
          <select
            name="investment-type"
            onChange={e => {
              if (e.target.value === "Shares") {
                setShowShares(true);
                setShowMFs(false);
              } else if (e.target.value === "Managed Funds") {
                setShowMFs(true);
                setShowShares(false);
              } else {
                setShowMFs(false);
                setShowShares(false);
              }
            }}
          >
            <option>Please Select</option>
            <option>Managed Funds</option>
            <option>Shares</option>
          </select>
          {showMFs && (
            <div className="investment-edit-wrapper">
              <InSpecieMF
                addFundSubmit={addFundSubmit}
                addShareSubmit={addShareSubmit}
              />
            </div>
          )}

          {showShares && (
            <div className="investment-edit-wrapper">
              <InSpecieShares addShareSubmit={addShareSubmit} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InSpecie;
