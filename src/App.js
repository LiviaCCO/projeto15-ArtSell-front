import { BrowserRouter, Routes, Route } from "react-router-dom";
//import styled from "styled-components";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RegPage from "./pages/RegPage";
import BagPage from "./pages/BagPage";
import HomePage from "./pages/HomePage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ProductsPage />} /> */}
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/regulamento" element={<RegPage />} /> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/bag" element={<BagPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

