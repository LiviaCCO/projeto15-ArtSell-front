import { BrowserRouter, Routes, Route } from "react-router-dom";
//import styled from "styled-components";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RegPage from "./pages/RegPage";
import BagPage from "./pages/BagPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";


export default function App() {
  const [total, setTotal] = useState('0');
  const [carrinho, setCarrinho] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/regulamento" element={<RegPage />} /> 
        <Route path="/" element={<HomePage carrinho={carrinho} setCarrinho={setCarrinho} setTotal={setTotal}/>} /> 
        <Route path="/bag" element={<BagPage carrinho={carrinho} setCarrinho={setCarrinho} total={total} setTotal={setTotal}/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

