import React, { useContext } from "react";
import { MainPageContext } from "./../../Context/MainPageContext";
import { InvestmentContext } from "../../Context/InvestmentContext";
import { SummaryDetailsContext } from "./../../Context/SummaryDetailsContext";
import PersonalDetails from "../Account-details/PersonalDetails";

export default function PensionFacility() {
  const { dob, getAge, minimumPension } = useContext(SummaryDetailsContext);
  const {
    balance,
    paymentType,
    setPaymentType,
    annualPayment,

    setPaymentFrequency,
    payMentFrequencyFunction
  } = useContext(MainPageContext);
  const age = getAge(dob);
  const minPen = minimumPension(age, balance);

  return (
    <>
      <h3>Pension Facility</h3>
      <div className="Pension-Facility_grid">
        {/* <PersonalDetails /> */}

        <div className="Pension-Facility_grid-also">
          <div>Age: {age} </div>
          <div>Minimum Pension: {minimumPension(age, balance)}</div>
          <div>
            <select
              name="payment-amount"
              onChange={e => setPaymentType(e.target.value)}
            >
              <option>Please Select</option>
              <option>Minimum</option>
              <option>Nominated</option>
            </select>
            Annual Payment Amount: ${annualPayment(minPen)}
          </div>
          {paymentType !== "Please Select" && (
            <div>
              <select
                name=" payment-frequency"
                onChange={e => setPaymentFrequency(e.target.value)}
              >
                <option>Select payment frequency</option>
                <option>2 weeks</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Bi-Yearly</option>
                <option>Yearly</option>
              </select>
              {payMentFrequencyFunction()}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
