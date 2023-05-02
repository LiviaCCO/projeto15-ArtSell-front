import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import imageLogo from "./logo.jpg";


export default function RegPage() {
  
  return (
    <SingUpContainer>
        <Link to={"/cadastro"}>
            <img src={imageLogo}/>
            <Logo>ArtSell</Logo>
        </Link>     

        <RegText>
        Ao acessar e utilizar este site, o usuário concorda em seguir e estar vinculado aos seguintes termos e condições de uso.
        <p>
          1 Propriedade intelectual:
            O conteúdo deste site, incluindo textos, imagens, gráficos, logotipos, ícones, fotografias, clipes de áudio e vídeo, é de propriedade exclusiva do site ou de seus licenciadores e é protegido por leis de propriedade intelectual.
        </p><p>
          2 Compra de obras de arte:
            Ao comprar uma obra de arte neste site, o usuário declara ser maior de idade e ter capacidade legal para realizar a transação. O usuário também concorda em pagar o valor total da obra, incluindo impostos e taxas de envio, quando aplicáveis.
        </p><p>
          3 Autenticidade das obras de arte:
            O site garante a autenticidade de todas as obras de arte comercializadas em seu site. Caso sejam identificadas falsificações, o site reembolsará o valor total da obra ao comprador.
        </p><p>
          4 Devolução e troca de obras de arte:
            O usuário pode solicitar a devolução ou troca de uma obra de arte no prazo de até 7 dias úteis após o recebimento da mesma, desde que a obra esteja em perfeitas condições e na embalagem original. O site arcará com os custos de envio para devolução ou troca da obra.
        </p><p>
          5 Responsabilidade do usuário:
            Os usuários são responsáveis por garantir que todas as informações fornecidas ao site sejam precisas e atualizadas. O usuário também é responsável por garantir que o uso do site esteja em conformidade com as leis aplicáveis.
        </p><p>
          6 Limitação de responsabilidade:
            O site não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes decorrentes ou relacionados ao uso deste site ou do conteúdo disponível nele.
        </p><p>
          7 Jurisdição e lei aplicável:
            Este site é controlado e operado a partir do Brasil e está sujeito às leis brasileiras. Qualquer disputa relacionada a este site será regida pelas leis brasileiras e será resolvida exclusivamente nos tribunais brasileiros.
        </p>
        </RegText>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-bottom: 30px;
`
