import { BrowserRouter, Routes, Route } from "react-router-dom";
//import styled from "styled-components";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RegPage from "./pages/RegPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ProductsPage />} /> */}
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/regulamento" element={<RegPage />} /> 
        {/* <Route path="/home" element={<HomePage />} />
        <Route path="/bag" element={<bagPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

