import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import imageLogo from "./logo.jpg";


export default function BagPage() {
  const navigate = useNavigate();

  function fechar(){
    console.log("fechar carrinho")
  }

  return (
    <ContainerBody>
      <Head>
        <img src={imageLogo}/>
        <Logo>ArtSell</Logo>
        <ion-icon name="exit-outline"></ion-icon>
      </Head>
      <Bag>
        <h1>Meu carrinho</h1>
        <Item>
          <img src={imageLogo}/>
          <Info>
            <p>Aqui a descrição dsojafiueshfiuheiufhvidsh</p>
            <span>R$ XX,xx</span>
          </Info>
          <ion-icon name="trash-outline"></ion-icon>
        </Item>
        <Item>
          <img src={imageLogo}/>
          <Info>
            <p>Aqui a descrição</p>
            <span>R$ XX,xx</span>
          </Info>
        </Item>
        <Item>
          <img src={imageLogo}/>
          <Info>
            <p>Aqui a descrição</p>
            <span>R$ XX,xx</span>
          </Info>
        </Item>

      </Bag>

      <Footer>
        <Tot>
          <p>Total: <span>R$ XX,XX</span></p>
        </Tot>

        <button onClick={fechar}>Escolher forma de pagamento</button>
      </Footer>
    
      
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
  margin-top: 20vh;
  margin-bottom: 20vh;
  gap: 10px;
  overflow: auto;
  h1{
    font-size:30px;
    color: darkblue;
  }
`
const Item=styled.div`
  display: flex;
  flex-direction: row;
  width: 85vw;
  background-color: rgb(236 238 241);
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  img{
    margin-top: 0px;
    heigth: 30px;
  }
  position: relative;
`
const Info=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  width: 60vw;
  word-break: break-all;
  gap: 5px;
  ion-icon{
    position: absolute;
    top: 3px;
    left: 3px;
    font-size: 25px;
  }

`
const Footer=styled.div`
  position: fixed;
  rigth: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(187 197 207);
  width: 100%;
  padding: 10px;
  gap: 10px;
  button{
    color: white;
  }
`
const Tot=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`