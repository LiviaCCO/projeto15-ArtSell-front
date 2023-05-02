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
  const [token, setToken]= useState(undefined);
  const [list, setList] = useState([
      {id: "01", name: "Quadro Isso Não É Real", value: "300", image: "https://carrefourbr.vtexassets.com/arquivos/ids/48844828-540-auto?v=637870507290070000&width=540&height=auto&aspect=true"},
      {id: "02", name: "Noite Estrelada - Van Gogh", value: "1000", image: "https://46781.cdn.simplo7.net/static/46781/sku/quadros-por-tema-pintores-famosos-quadro-retangular-vincent-van-gogh-noite-estrelada-sobre-o-rodano--p-1650461116987.jpg"},
      {id: "03", name: "Quadro Isso Não É Real", value: "300", image: "https://carrefourbr.vtexassets.com/arquivos/ids/48844828-540-auto?v=637870507290070000&width=540&height=auto&aspect=true"},
      {id: "04", name: "Noite Estrelada - Van Gogh", value: "1000", image: "https://46781.cdn.simplo7.net/static/46781/sku/quadros-por-tema-pintores-famosos-quadro-retangular-vincent-van-gogh-noite-estrelada-sobre-o-rodano--p-1650461116987.jpg"},
      {id: "05", name: "Quadro Isso Não É Real", value: "300", image: "https://carrefourbr.vtexassets.com/arquivos/ids/48844828-540-auto?v=637870507290070000&width=540&height=auto&aspect=true"},
      {id: "06", name: "Noite Estrelada - Van Gogh", value: "1000", image: "https://46781.cdn.simplo7.net/static/46781/sku/quadros-por-tema-pintores-famosos-quadro-retangular-vincent-van-gogh-noite-estrelada-sobre-o-rodano--p-1650461116987.jpg"},
      {id: "07", name: "Quadro Isso Não É Real", value: "300", image: "https://carrefourbr.vtexassets.com/arquivos/ids/48844828-540-auto?v=637870507290070000&width=540&height=auto&aspect=true"},
      {id: "08", name: "Noite Estrelada - Van Gogh", value: "1000", image: "https://46781.cdn.simplo7.net/static/46781/sku/quadros-por-tema-pintores-famosos-quadro-retangular-vincent-van-gogh-noite-estrelada-sobre-o-rodano--p-1650461116987.jpg"},
      {id: "09", name: "Quadro Isso Não É Real", value: "300", image: "https://carrefourbr.vtexassets.com/arquivos/ids/48844828-540-auto?v=637870507290070000&width=540&height=auto&aspect=true"},
      {id: "10", name: "Noite Estrelada - Van Gogh", value: "1000", image: "https://46781.cdn.simplo7.net/static/46781/sku/quadros-por-tema-pintores-famosos-quadro-retangular-vincent-van-gogh-noite-estrelada-sobre-o-rodano--p-1650461116987.jpg"},
      {id: "11", name: "Quadro Isso Não É Real", value: "300", image: "https://carrefourbr.vtexassets.com/arquivos/ids/48844828-540-auto?v=637870507290070000&width=540&height=auto&aspect=true"},
      {id: "12", name: "Noite Estrelada - Van Gogh", value: "1000", image: "https://46781.cdn.simplo7.net/static/46781/sku/quadros-por-tema-pintores-famosos-quadro-retangular-vincent-van-gogh-noite-estrelada-sobre-o-rodano--p-1650461116987.jpg"}
    ]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage setToken={setToken}/>} /> 
        <Route path="/regulamento" element={<RegPage />} /> 
        <Route path="/" element={<HomePage carrinho={carrinho} setCarrinho={setCarrinho} setTotal={setTotal} list={list} token={token}/>} /> 
        <Route path="/bag" element={<BagPage carrinho={carrinho} setCarrinho={setCarrinho} total={total} setTotal={setTotal} token={token} setToken={setToken} list={list} setList={setList}/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

