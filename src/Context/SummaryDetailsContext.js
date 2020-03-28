import React, { createContext, useState } from "react";

export const SummaryDetailsContext = createContext();

const SummaryDetailsContextProvider = props => {
  const [showTexti, setShowTexti] = useState(false),
    [showText4, setShowText4] = useState(false),
    [showText5, setShowText5] = useState(false),
    [showText, setShowText] = useState(false),
    [name, setName] = useState("John"),
    [surname, setSurname] = useState("Doe"),
    [dob, setDob] = useState("01/01/1900"),
    [accountType, setAccountType] = useState("Please Select Account type"),
    [adviserInitialFee$, setAdviserInitialFee$] = useState(0),
    [adviserInitialFeeP, setAdviserInitialFeeP] = useState(0),
    [adviserOngoingFee$, setAdviserOngoingFee$] = useState(0),
    [adviserOngoingFeeP, setAdviserOngoingFeeP] = useState(0),
    [cpi, setCpi] = useState(false),
    [adviserOngoingFeeIncrease, setadviserOngoingFeeIncrease] = useState(),
    [adviserName, setAdviserName] = useState("Jane Doe Inc"),
    [adviserCode, setAdviserCode] = useState("133766"),
    [dealerGroup, setDealerGroup] = useState("Borkuf enterprises"),
    [showText1, setShowText1] = useState(false),
    [showText2, setShowText2] = useState(false),
    [showText3, setShowText3] = useState(false),
    [menuActive, setMenuState] = useState(1);
  const [showPIncrease, setshowPIncrease] = useState(false);

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function minimumPension(age, balance) {
    if (age < 65) {
      return (balance * 0.04).toFixed(2);
    }
    if (age >= 65 && age <= 74) {
      return (balance * 0.05).toFixed(2);
    }
    if (age >= 75 && age <= 79) {
      return (balance * 0.06).toFixed(2);
    }
    if (age >= 80 && age <= 84) {
      return (balance * 0.07).toFixed(2);
    }
    if (age >= 85 && age <= 89) {
      return (balance * 0.09).toFixed(2);
    }
    if (age >= 90 && age <= 94) {
      return (balance * 0.11).toFixed(2);
    }
    if (age >= 95) {
      return (balance * 0.14).toFixed(2);
    }
  }
  return (
    <SummaryDetailsContext.Provider
      value={{
        minimumPension,
        getAge,
        showText,
        setShowText,
        menuActive,
        setMenuState,
        showText3,
        setShowText3,
        showText2,
        setShowText2,
        showText1,
        setShowText1,
        dealerGroup,
        setDealerGroup,
        adviserCode,
        setAdviserCode,
        adviserName,
        setAdviserName,
        adviserOngoingFeeIncrease,
        setadviserOngoingFeeIncrease,
        adviserOngoingFeeP,
        setAdviserOngoingFeeP,
        adviserOngoingFee$,
        setAdviserOngoingFee$,
        adviserInitialFeeP,
        setAdviserInitialFeeP,
        adviserInitialFee$,
        setAdviserInitialFee$,
        cpi,
        setCpi,
        accountType,
        setAccountType,
        surname,
        setSurname,
        dob,
        setDob,
        name,
        setName,
        showTexti,
        setShowTexti,
        showText4,
        setShowText4,
        showText5,
        setShowText5,
        showPIncrease,
        setshowPIncrease
      }}
    >
      {props.children}
    </SummaryDetailsContext.Provider>
  );
};

export default SummaryDetailsContextProvider;
