import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import FormContext from "./Context/FormContext";

function App() {
  return (
    <FormContext>
      <Header />
      <Outlet />
    </FormContext>
  );
}

export default App;
