import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/formImage/FormImage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./footer/Footer";
import ScrollToTop from "./footer/ScrollToTop";
import TableInfo from "./components/DashBoard/TableInfo";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/dashboard" element={<TableInfo />} />
        </Routes>
        </div>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
