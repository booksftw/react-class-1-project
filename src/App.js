import "./App.css";
import { Form } from "./components/Form";
import { TableList } from "./components/TableList";
import logo from "./assets/investment-calculator-logo.png";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";


function App() {
  const [listData, setListData] = useState({});

  const dataFromForm = (dataFromChild) => {
    console.log(dataFromChild, "data from child");

    const calculatedData = calculateInvestmentResults(dataFromChild)
    // const formattedData = calculatedData.forEach(el => {
    //   el.initialInvestment = dataFromChild.initialInvestment
    // })

    console.log(calculatedData)
    // console.log("howdy", formattedData)
    setListData(calculatedData)
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
