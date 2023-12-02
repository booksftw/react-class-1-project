import React, { useState } from "react";

function TableRows({ data }) {
  const dataIsAvailable = data.length > 0 // false
  let totalEarned = 0

  if (dataIsAvailable) {
    const dataValues = data.map(d => {
      totalEarned += d.interest
      return (
        <>
          <tr>
            <td>{d.year}</td>
            <td>{d.valueEndOfYear}</td>
            <td>{d.interest}</td>
            <td>{totalEarned}</td>
            <td>{d.initialInvestment + (d.annualInvestment * d.year)}</td>
          </tr>
        </>
      )
    })

    return (
      <>
        {dataValues}
      </>)

  }
  // return (
  //   <>
  //     <tr>
  //       <td>{dataIsAvailable && data[0].year}</td> {/* Year Correct  */}
  //       <td>{dataIsAvailable && data[0].valueEndOfYear}</td> {/* Value end of year Correct */}
  //       <td>{dataIsAvailable && data[0].interest}</td> {/*Interest Correct */}
  //       <td>{dataIsAvailable && data[0].interest}</td> {/* total earned all interest added up */}
  //       <td>{dataIsAvailable && data[0].annualInvestment + data[0].initialInvestment}</td> {/* initial investment +annual investments * year */}
  //     </tr>
  //   </>)
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
        {/* <tr>
          <td>1</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr> */}

        <TableRows data={props.data} />
      </tbody>
    </table>
  </>;
}
