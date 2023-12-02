import React, { useState } from "react";

export function Form(props) {
  props.submitForm("test");
  const [initInvestment, setInvestment] = useState();

  return (
    <>
      <form>
        <label for="initInvestment">INITIAL INVEMENT</label>
        <br></br>
        <input type="text" id="initInvestment" name="initInvestment"></input>
        <button type="button" onClick={props.submitForm}>
          Submit
        </button>
      </form>
    </>
  );
}
