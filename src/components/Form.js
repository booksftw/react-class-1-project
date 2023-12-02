import React, { useState } from "react";

export function Form(props) {
  const [inputs, setInputs] = useState({});

  const convertToNumber = (obj) => {
    for (const property in obj) {
      setInputs(inputs[property] = Number(inputs[property]))
    }
  }

  const submitForm = (event) => {
    event.preventDefault();

    convertToNumber(inputs);

    props.submitForm(inputs);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(inputsVal => ({ ...inputsVal, [name]: value }));
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="initialInvestment">INITIAL INVEMENT</label>
        <br></br>
        <input type="number" id="initialInvestment" name="initialInvestment" value={inputs.initialInvestment || ""}
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
