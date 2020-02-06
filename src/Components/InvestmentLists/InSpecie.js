import React, { useState } from "react";
import InspecieDisplay from "./InSpecie/InspecieDisplay";
import InSpecieMF from "./InSpecie/InSpecieMF";
import InSpecieShares from "./InSpecie/InSpecieShares";

const InSpecie = () => {
  const [showShares, setShowShares] = useState(false);
  const [showMFs, setShowMFs] = useState(false);
  return (
    <div className="In-Specie-Page-Wrapper">
      <div className="In-specie-Display-Wrapper">
        <InspecieDisplay />
      </div>
      <div>
        <select
          name="investment-type"
          onChange={e => {
            if (e.target.value === "Shares") {
              setShowShares(true);
            }
            if (e.target.value !== "Shares") {
              setShowShares(false);
            }
            if (e.target.value === "Managed Funds") {
              setShowMFs(true);
            }
            if (e.target.value !== "Managed Funds") {
              setShowMFs(false);
            }
          }}
        >
          <option>Please Select</option>
          <option>Managed Funds</option>
          <option>Shares</option>
        </select>
        {/* {showMFs && ( */}
        <div className="investment-edit-wrapper">
          <InSpecieMF />
        </div>
        {/* )} */}

        {showShares && (
          <div className="investment-edit-wrapper">
            <InSpecieShares />
          </div>
        )}
      </div>
    </div>
  );
};

export default InSpecie;
