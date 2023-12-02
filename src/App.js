import "./App.css";
import { Form } from "./components/Form";
import { TableList } from "./components/TableList";

function App() {
  const dataFromForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Logo</h1>
      <h1>React Investment Calculator</h1>
      <Form submitForm={dataFromForm} />
      <TableList />
    </>
  );
}

export default App;
