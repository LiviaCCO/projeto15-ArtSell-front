import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import imageLogo from "./logo.jpg";


export default function RegPage() {
  
  function login(e){
      e.preventDefault();
      
      console.log("Sucesso")

    /*   axios.post("xxxxxxxxxxx", form)
      .then((res) => navigate("/login"))
      .catch((err) => alert(err.response.data)) */
  } 

  return (
    <SingUpContainer>
        <Link to={"/cadastro"}>
            <img src={imageLogo}/>
            <Logo>ArtSell</Logo>
        </Link>     

        <RegText>Texto do Regulamento aqui!!!!!!!!</RegText>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: rgb(187 197 207);
  gap: 10px;
  
  img{
    width: 80px;
    margin-top:50px;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin: 0px;
    padding: 0px;
  }
`
const Logo = styled.h1`
    font-size: 50px;
    color: darkblue;
    margin-bottom: 25px;
    margin-top: 15px;
`
const RegText = styled.h2`
    font-size: 20px;
    color: black;
    margin: 0px 30px;
`
