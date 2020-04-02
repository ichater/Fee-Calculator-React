import React, { useContext } from "react";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";
import AdviserDetails2Expanded2 from "./AdviserDetails2Expanded2";

const AdviserDetails2Expanded = props => {
  const {
    setAdviserOngoingFee$,
    setAdviserOngoingFeeP,
    setadviserOngoingFeeIncrease,
    setCpi
  } = props;

  const {
    setShowTexti,
    showText4,
    setShowText4,
    showText5,
    setShowText5
  } = useContext(SummaryDetailsContext);

  return (
    <>
      <div className="AdviserDetails1Expanded__grid">
        <div>
          <input
            type="checkbox"
            onChange={e => {
              if (e.target.checked === true) {
                setShowText4(true);
              } else {
                setShowText4(false);
              }
            }}
          />
          <labal>Dollar based Fee: $</labal>
        </div>
        {showText4 && (
          <>
            <div>
              <input
                type="number"
                onChange={e => setAdviserOngoingFee$("$" + e.target.value)}
              ></input>
            </div>

            <div>Increase my $ based fee per year</div>

            <div>
              <input
                name="increasefee"
                type="radio"
                for="increase-yes"
                onClick={() => setShowTexti(true)}
              ></input>
              <label id="increase-yes">Yes</label>
              <input
                name="increasefee"
                type="radio"
                id="increase-no"
                // checked="checked"
                onClick={() => setShowTexti(false)}
              ></input>{" "}
              <label for="increase-no">no</label>
            </div>
            {/* {showTexti && ( */}
            <div>
              <AdviserDetails2Expanded2
                setadviserOngoingFeeIncrease={setadviserOngoingFeeIncrease}
                setCpi={setCpi}
              />
            </div>
            {/* )} */}
          </>
        )}

        <div className="AdviserDetails1Expanded__grid-ANDOR">AND/OR</div>
        <div>
          <input
            type="checkbox"
            onChange={e => {
              if (e.target.checked === true) {
                setShowText5(true);
              } else {
                setShowText5(false);
              }
            }}
          ></input>
          <labal>Percentage based Fee</labal>
        </div>
        {showText5 && (
          <div>
            <span>%</span>
            <input
              type="number"
              onChange={e => setAdviserOngoingFeeP(e.target.value + "%")}
            ></input>
          </div>
        )}
      </div>
    </>
  );
};

export default AdviserDetails2Expanded;
