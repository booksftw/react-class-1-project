import "./App.css";
import { Form } from "./components/Form";
import { TableList } from "./components/TableList";
import logo from "./assets/investment-calculator-logo.png";

function App() {
  const dataFromForm = (data) => {
    console.log(data, "data from child");
  };

  return (
    <>
      <img src={logo} width="200" />
      <h1>React Investment Calculator</h1>
      <Form submitForm={dataFromForm} />
      <TableList />
    </>
  );
}

export default App;
