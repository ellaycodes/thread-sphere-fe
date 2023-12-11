import "./App.css";
import { Header } from "../components/header";
import { Body } from "../components/body";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  );
}

export default App;
