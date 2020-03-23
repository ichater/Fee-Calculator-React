import React, { useContext } from "react";
import { InvestmentContext } from "../../Context/InvestmentContext";
import { MainPageContext } from "../../Context/MainPageContext";

const ShareDisplay = props => {
  const { mainRemoveShareSumbit, checkedShares, setCheckedShates } = useContext(
    InvestmentContext
  );
  const { balance } = useContext(MainPageContext);
  const { ASXcode, ListedInvestmentName, Category, id, value } = props;
  const handleUpdate2 = (id, value) => {
    const itemsCopy = [...checkedShares];
    const index = itemsCopy.findIndex(item => item.id === id);
    itemsCopy[index].value = value;
    setCheckedShates(itemsCopy);
  };
  return (
    <>
      <tr>
        <td>{ListedInvestmentName}</td>
        <td>{ASXcode}</td>
        <td>{Category}</td>
        <td>{((value / balance) * 100).toFixed(2)} %</td>
        <td>
          <input
            type="number"
            value={value}
            onChange={e => handleUpdate2(id, e.target.value)}
          ></input>
        </td>
        <td
          className="Main-Table-Delete"
          onClick={() => mainRemoveShareSumbit(id)}
        >
          &times;
        </td>
      </tr>
    </>
  );
};

export default ShareDisplay;
