import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

export default function BagPage({total, setTotal, carrinho, setCarrinho, token, setToken, list, setList }) {
  const navigate = useNavigate();

  function fechar(){
    const config = { headers: { Authorization: `Bearer ${token}` } }
    
    return () => {

        axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, config)
        //axios.post('https://artsell-spg1.onrender.com/logout', config)
            .then(() => {
                const newList = list.filter(elem => !carrinho.some(prod => prod.id === elem.id));
                setList(newList);
                setToken(undefined);
                setCarrinho([]);
                navigate("/")
            })
            .catch((err) => alert(err.response.data))
    }
  }

  function logout(){   
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return () => {
        axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, config)
        //axios.post('https://artsell-spg1.onrender.com/logout', config)
            .then(() => {
                setToken(undefined)
                setCarrinho([]);
                navigate("/")
            })
            .catch((err) => alert(err.response.data))
    }
  }

  function excluir(e){
    console.log("Excluir", e)
    //excluir item da lista
    const excluir = carrinho.filter(element => element.id !== e);
    setCarrinho(excluir);
  }

  function valorTotal(){
    let soma = 0;
    for(let i=0; i<carrinho.length; i++){
      soma+=(Number(carrinho[i].value));
    }
    setTotal(soma);
  }

  useEffect(valorTotal, [carrinho]);

  return (
    <ContainerBody>
      <Head>
        <StyleLink to={"/"}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </StyleLink>
        <Logo>ArtSell</Logo>
        <ion-icon onClick={logout} name="exit-outline"></ion-icon>
      </Head>
      <Bag>
        <h1>Meu carrinho</h1>
        {carrinho.length !== 0 ? (carrinho.map((i)=>
          <Item>
            <img src={i.image}/>
            <Info>
              <p>{i.name}</p>
              <span>R$ {i.value},00</span>
            </Info>
            <ion-icon onClick={()=>excluir(i.id)} name="trash-outline"></ion-icon>
          </Item>))
          : (<Item>
              <ion-icon name="cart"></ion-icon>
              <p><span>Seu carrinho está vazio</span></p>
            </Item>)
        }
        
      </Bag>

      <Footer>
        
        {carrinho.length !== 0 ? (
          <>
          <Tot>
            <p>TOTAL: <span>R$ {total},00</span></p>
          </Tot>
          <button onClick={fechar}>Clique aqui para pagar!</button>
          </>
          ) : (
          <StyleLink to={"/"}>
            <button>Ir às compras!</button>
          </StyleLink>
        )}
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
  ion-icon{
    font-size: 30px;
  }
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

const StyleLink = styled(Link)`
    text-decoration: none;
    /* margin: 0px;
    padding: 0px; */
`