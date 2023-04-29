//import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import imageLogo from "./logo.jpg";
import differenceInYears from "date-fns/differenceInYears";


export default function SignUpPage() {

  const [form, setForm] = useState({ name: "", email: "", password: "", cpfCnpj: "" , date: ""});
  const [emailConfirm, setEmailConfirm] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isChecked, setIsCheck] = useState(false);
  const today= new Date();
  const birthdayInMs = new Date(form.date);
  const years = differenceInYears(today, birthdayInMs);
    
  //const navigate = useNavigate();
  
  function signUp(e){
      e.preventDefault();
      console.log(years);
      if(form.email!==emailConfirm) return alert("E-mail divergente. Por favor, confirme seu e-mail!");
      if(form.password!==passwordConfirm) return alert("As senhas devem ser iguais!");
      if(isChecked===false) return alert("Você precisa ler e concordar com os termos de uso do ArtSell");
      if(years < 18) return alert("Desculpe! Este app não é permitido para menores de 18 anos!");
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
      <form onSubmit={signUp}>
        <input 
        placeholder="CPF" 
        type="number" 
        value={form.cpfCnpj}
        onChange={(e) => setForm({ ...form, cpfCnpj: e.target.value })}
        />   
        <input 
        placeholder="Nome completo" 
        type="text" 
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        />  
        <input 
        placeholder="Data de nascimento" 
        type="date" 
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        />                   
        <input 
        placeholder="E-mail" 
        type="email" 
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input 
        placeholder="Confirme o e-mail" 
        type="email" 
        value={emailConfirm}
        onChange={(e) => setEmailConfirm(e.target.value)}
        />
        <input 
        placeholder="Senha" 
        type="password" 
        autocomplete="new-password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input 
        placeholder="Confirme a senha" 
        type="password" 
        autocomplete="new-password" 
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Reg>
        <input type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsCheck(e.target.checked)}/>
        Li e condordo com os <Link to={"/regulamento"}>termos de uso do ArtSell</Link>.
        </Reg>
        <button type="submit">Finalizar cadastro</button>
      </form>

      <StyleLink to={"/login"}>
        Já tem uma conta? Clique aqui!
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