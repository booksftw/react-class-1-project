import React, { useState } from "react";

function Test() {

  return (<><h1>Test</h1></>)
}

export function TableList(props) {


  return <>
    <h1>TableList</h1>
    {props.data.annualInvestment}
    {props.data.duration}
    {props.data.expectedReturn}
    {props.data.initialInvestment}
    <table>
      <tbody>
        <tr>
          <th>Year</th>
          <th>Value end of year</th>
          <th>Year earned</th>
          <th>total earned</th>
          <th>Total amount invested</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </tbody>
    </table>
  </>;
}
