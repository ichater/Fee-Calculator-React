import React from "react";
import InSpecieMFInput from "./InSpecieMFInput";

const InSpecieMF = () => {
  return (
    <>
      <h2>Add a Fund</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>APIR</th>
            <th>Nab</th>
            <th>MER</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>x</td>
            <td>sampleFund</td>
            <td>KYCX12</td>
            <td>#</td>
            <td>1.0</td>
          </tr>
        </tbody>
      </table> */}
      <InSpecieMFInput />
    </>
  );
};

export default InSpecieMF;
