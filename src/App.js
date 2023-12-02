import "./App.css";
import { Form } from "./components/Form";
import { TableList } from "./components/TableList";
import logo from "./assets/investment-calculator-logo.png";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";


function App() {
  const [listData, setListData] = useState({});

  const dataFromForm = (data) => {
    console.log(data, "data from child");
    const y = {
      "initialInvestment": 100000,
      "annualInvestment": 120000,
      "expectedReturn": 10,
      "duration": 5
    }
    const x = calculateInvestmentResults(y)
    console.log("howdy", x)
    setListData(data)
  };

  return (
    <>
      <img src={logo} width="200" />
      <h1>React Investment Calculator</h1>
      <Form submitForm={dataFromForm} />
      <TableList data={listData} />
    </>
  );
}

export default App;
