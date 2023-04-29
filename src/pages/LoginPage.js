//import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import imageLogo from "./logo.jpg";


export default function LoginPage() {

  const [form, setForm] = useState({cpfCnpj: "", password: ""});
  //const navigate = useNavigate();
  
  function login(e){
      e.preventDefault();
      
      console.log("Sucesso", form)

    /*   axios.post("xxxxxxxxxxx", form)
      .then((res) => navigate("/login"))
      .catch((err) => alert(err.response.data)) */
  } 

  return (
    <SingUpContainer>
        <img src={imageLogo}/>
      <Logo>
        ArtSell</Logo>
      <form onSubmit={login}>
        <input 
        placeholder="CPF" 
        type="number" 
        value={form.cpfCnpj}
        onChange={(e) => setForm({ ...form, cpfCnpj: e.target.value })}
        />   
        <input 
        placeholder="Senha" 
        type="password" 
        autocomplete="new-password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Entrar</button>
      </form>

      <StyleLink to={"/cadastro"}>
        Ainda não é cadastrado? Clique aqui!
      </StyleLink>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(187 197 207);
  gap: 10px;
  img{
    width: 80px;
  }
`
const Logo = styled.h1`
    font-size: 50px;
    color: darkblue;
    margin-bottom: 25px;
    margin-top: 15px;
`
const StyleLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 0px;
    padding: 0px;
    font-size:20px;
    margin-top: 15px;
`
const Reg = styled.label`
    input{
        width: 10px;
        margin-right: 5px;
    }
    a {
        color: black;
        text-decoration: underline;
    }
`