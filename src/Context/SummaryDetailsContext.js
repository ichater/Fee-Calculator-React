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
  return (
    <SummaryDetailsContext.Provider
      value={{
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
