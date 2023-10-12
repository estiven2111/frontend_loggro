import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/formImage/FormImage";
import NavBar from "./components/NavBar/NavBar";
import TableInfo from "./components/DashBoard/TableInfo";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/dashboard" element={<TableInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
