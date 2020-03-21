import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";
export default function ListedFee() {
  const { checkedShares } = useContext(InvestmentContext);
  const total = checkedShares
    .map(Share => (Share.value / 100) * 0.1)
    .reduce((acc, cur) => acc + cur);
  return <>{total.toFixed(2)}</>;
}
