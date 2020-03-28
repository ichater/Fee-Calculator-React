import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";
import { MainPageContext } from "../../Context/MainPageContext";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";

export default function MainPageCashAccount() {
  const { accountType } = useContext(SummaryDetailsContext);

  const { balance, perPensionPayment, payMentFrequency } = useContext(
    MainPageContext
  );
  const { totalVal } = useContext(InvestmentContext);

  const minCash = () => {
    if (balance / 100 > 5000) {
      return 5000;
    } else {
      return balance / 100;
    }
  };

  const cashAccount = () => {
    if (balance - totalVal() == 0) {
      return 0;
    } else {
      return balance - totalVal();
    }
  };

  const pensionCashAccount = () => {
    if (payMentFrequency == "2 weeks" || payMentFrequency == "Monthly") {
      return (
        <>
          <div>Upcoming pension Payments: ${perPensionPayment * 2}</div>
          <div>Total minimum cash: ${minCash() + perPensionPayment * 2} </div>
        </>
      );
    } else {
      return (
        <>
          <div>Upcoming pension Payments: ${perPensionPayment}</div>
          <div>Total minimum cash: ${minCash() + perPensionPayment} </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="Cash-Account-Wrapper">
        {accountType !== "Pension" && (
          <div className={cashAccount() < minCash() && "Cash-Account-Alert"}>
            Cash Account: {cashAccount()}{" "}
            {cashAccount() < minCash() && (
              <span
                className="alert-message"
                onClick={() =>
                  alert(
                    "Cash account below minimum, adjust balance or investment value"
                  )
                }
              >
                &#33;
              </span>
            )}{" "}
            <div> Minimum Cash ${minCash()}</div>
          </div>
        )}
        {/* {accountType == "Pension" && ( */}
        <>
          {" "}
          <div className={cashAccount() < minCash() && "Cash-Account-Alert"}>
            Cash Account: {cashAccount()}{" "}
            {cashAccount() < minCash() && (
              <span
                className="alert-message"
                onClick={() =>
                  alert(
                    "Cash account below minimum, adjust balance or investment value"
                  )
                }
              >
                &#33;
              </span>
            )}{" "}
            <div> Minimum Cash ${minCash()}</div> {pensionCashAccount()}{" "}
          </div>{" "}
        </>
        // )}
      </div>
    </>
  );
}
