import React from "react";
import uuidv4 from "uuid/v4";

const SMAdisplay = props => {
  const { Name, APIR, Nab, MER } = props;
  return (
    <>
      <tr>
        <td>{Name}</td>
        <td>{APIR}</td>
        <td>{Nab}</td>
        <td>{MER}</td>
        <td>
          %<input type="number"></input>
        </td>
        <td>
          $<input type="number"></input>
        </td>
      </tr>
    </>
  );
};

export default SMAdisplay;
