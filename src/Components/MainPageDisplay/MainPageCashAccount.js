import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";
import { MainPageContext } from "../../Context/MainPageContext";

export default function MainPageCashAccount() {
  const { balance } = useContext(MainPageContext);
  const { totalVal } = useContext(InvestmentContext);
  const cashAccount = () => {
    if (balance - totalVal() == 0) {
      return 0;
    } else {
      return balance - totalVal();
    }
  };

  return (
    <div className="Cash-Account-Wrapper">
      <div className={cashAccount() < 0 && "Cash-Account-Alert"}>
        Cash Account: {cashAccount()}{" "}
        {cashAccount() < 0 && (
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
        )}
      </div>
    </div>
  );
}
