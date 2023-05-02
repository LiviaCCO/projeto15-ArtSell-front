import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import imageLogo from "./logo.jpg";


export default function HomePage() {
  const navigate = useNavigate();

  function fechar(){
    console.log("fechar carrinho")
  }

  return (
    <ContainerBody>
      <Head>
        <img src={imageLogo}/>
        <Logo>ArtSell</Logo>
        <ion-icon name="cart-outline"></ion-icon>
      </Head>
      <Bag>
        <h1>A casa da arte</h1>
        <Itens>
            <Item2>
                <img src={imageLogo}/>
                <Info>
                    <p>Aqui a descrição dsojafiueshfiuheiufhvidsh</p>
                    <span>R$ XX,xx</span>
                </Info>
                <button>Comprar</button>
            </Item2>
            <Item2>
                <img src={imageLogo}/>
                <Info>
                    <p>Aqui a descrição dsojafiueshfiuheiufhvidsh</p>
                    <span>R$ XX,xx</span>
                    <button>Comprar</button>
                </Info>
            </Item2>
            <Item2>
                <img src={imageLogo}/>
                <Info>
                    <p>Aqui a descrição </p>
                    <span>R$ XX,xx</span>
                    <button>Comprar</button>
                </Info>
            </Item2>
            <Item2>
                <img src={imageLogo}/>
                <Info>
                    <p>Aqui a descrição dsojafiueshfvidsh</p>
                    <span>R$ XX,xx</span>
                    <button>Comprar</button>
                </Info>
            </Item2>
            <Item2>
                <img src={imageLogo}/>
                <Info>
                    <p>Aqui a descrição dsojafiueshfiuheiufhvidsh</p>
                    <span>R$ XX,xx</span>
                    <button>Comprar</button>
                </Info>
            </Item2>
            
        </Itens>

      </Bag>  
      
    </ContainerBody>
  )
}

const ContainerBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: rgb(249 250 251);
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
  span{
    font-weight: bold;
  }
  p{
    font-size: 20px;
  }
`
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(187 197 207);
  width: 93%;
  padding: 15px;
  position: fixed;
  left:0px;
  top:0px;
  img{
    heigth: 8vh;
    margin: 0px;
  }
  ion-icon{
    font-size: 35px;
    color: darkblue;
  }
`
const Logo = styled.h1`
    font-size: 50px;
    color: darkblue;
    margin-bottom: 25px;
    margin-top: 15px;
`
const Bag=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-top: 20vh;
  width: 100%;
  gap: 10px;

  overflow-y: auto;
  h1{
    font-size:30px;
    color: darkblue;
  }
`
const Itens=styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`
const Item2=styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 250px;
  background-color: rgb(236 238 241);
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 5px;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  img{
    margin-top: 0px;
    heigth: 30px;
  }
  button{
    font-size: 14px;
    align-items: center;
    justify-content: space-around;
  }
`
const Info=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 35vw;
  word-break: break-all;
  gap: 5px;
  ion-icon{
    position: absolute;
    top: 3px;
    left: 3px;
    font-size: 25px;
  }

`
