import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import imageLogo from "./logo.jpg";
//import Context from "../../Context";


export default function HomePage({carrinho, setCarrinho, setTotal, list}) {
 // const {user, setUser} = useContext(Context);
/*   const config = {
    headers: {
        "Authorization": `Bearer ${user.token}`
    } 
}
  useEffect(()=>{
    axios.get("mongodb://localhost:27017/dbProjeto15", config)
    .then(resp=>setList(resp.data))
    .catch(err=>console.log(err.response.data))     
    }, [list]);
*/
    function buy(e){
        const selecionado = carrinho.find(item=>item.id===e);
        console.log(carrinho.includes(selecionado));
        
        if (selecionado) return (console.log("Já selecionado"));
        const novoPedido = list.find(item=>item.id===e);
        const novoCarrinho = [...carrinho, novoPedido];
        setCarrinho(novoCarrinho);
    };
    function valorTotal(){
      let soma = 0;
      for(let i=0; i<carrinho.length; i++){
        soma+=(Number(carrinho[i].value));
      }
      setTotal(soma);
    };
    useEffect(valorTotal, [carrinho]);

  return (
    <ContainerBody>
      <Head>
        <img src={imageLogo}/>
        <Logo>ArtSell</Logo>
        <Icon>
            <StyleLink to={"/bag"}><ion-icon name="cart-outline"></ion-icon></StyleLink>
            <StyleLink to={"/login"}><ion-icon name="person-outline"></ion-icon></StyleLink>
        </Icon>
      </Head>
      <Bag>
        <h1>A sua casa de peças raras</h1>
        <Itens>
            {list.map(i=>
            <Item2>
                <img src={i.image}/>
                <Info>
                    <p>{i.name}</p>
                    <span>R$ {i.value},00</span>
                </Info>
                <button key={i.id} 
                onClick={()=>buy(i.id)} 
                disabled={carrinho.some((item) => item.id === i.id)}>Comprar</button>
            </Item2> 
                )}
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
const Icon=styled.div`
  display:flex;
  gap: 5px;
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
  button:disabled{
    background-color: gray;
  }
 
  }
`
const Info=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 35vw;
  word-break: break-word;
  gap: 5px;
  ion-icon{
    position: absolute;
    top: 3px;
    left: 3px;
    font-size: 25px;
  }

`
const StyleLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 0px;
    padding: 0px;
    font-size:20px;
    margin-top: 15px;
`