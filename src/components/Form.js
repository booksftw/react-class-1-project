import React, { useState } from "react";

export function Form(props) {
  const [inputs, setInputs] = useState({});

  const submitForm = (event) => {
    event.preventDefault();
    props.submitForm(inputs)
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(inputsVal => ({ ...inputsVal, [name]: value }))
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="initInvestment">INITIAL INVEMENT</label>
        <br></br>
        <input type="number" id="initInvestment" name="initInvestment" value={inputs.initInvestment || ""}
          onChange={handleChange}></input>
        <br></br>
        <label htmlFor="annualInvestment">ANNUAL INVEMENT</label>
        <br></br>
        <input type="number" id="annualInvestment" name="annualInvestment" value={inputs.annualInvestment || ""}
          onChange={handleChange}></input>
        <br></br>
        <label htmlFor="expectedReturn">EXPECTED RETURN</label>
        <br></br>
        <input type="number" id="expectedReturn" name="expectedReturn" value={inputs.expectedReturn || ""}
          onChange={handleChange}></input>
        <br></br>
        <label htmlFor="duration">DURATION</label>
        <br></br>
        <input type="number" id="duration" name="duration" value={inputs.duration || ""}
          onChange={handleChange}></input>

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
