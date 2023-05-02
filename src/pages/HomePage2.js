import styled from "styled-components";
import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const nav = document.querySelector('nav');

        if (hamburgerMenu && nav) {
            const handleClick = () => {
                nav.classList.toggle('show');
            };

            const handleResize = () => {
                if (window.innerWidth > 768) {
                    nav.classList.remove('show');
                }
            };

            hamburgerMenu.addEventListener('click', handleClick);
            window.addEventListener('resize', handleResize);

            // Remove os event listeners ao desmontar o componente
            return () => {
                hamburgerMenu.removeEventListener('click', handleClick);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const products = [{ id: 1, name: 'Product 1', price: 9.99, image: '/product-1.jpg' }, { id: 2, name: 'Product 2', price: 19.99, image: '/product-2.jpg' }, { id: 3, name: 'Product 3', price: 29.99, image: '/product-3.jpg' },];

    return (
        <>
            <HeaderContainer>
                <Logo>Meu Site</Logo>
                <Nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </Nav>
                <HamburgerMenu className="hamburger-menu">
                    <Line />
                    <Line />
                    <Line />
                </HamburgerMenu>
            </HeaderContainer>

            <ProductWrapper>
                {products.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductImage src={product.image} alt={product.name} />
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>{product.price}</ProductPrice>
                    </ProductCard>
                ))}
            </ProductWrapper>
        </>
    );
}

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: 1px solid #ccc;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 50px;
  background-color: #333;
  color: #fff;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
  }

  ul li {
    margin-right: 20px;
  }

  ul li:last-child {
    margin-right: 0;
  }

  ul li a {
color: #fff;
text-decoration: none;
font-size: 18px;
font-weight: bold;
transition: color 0.3s ease-in-out;
&:hover {
  color: #f0f0f0;
}
}
`;

export const HamburgerMenu = styled.div`
display: none;
cursor: pointer;

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
justify-content: space-between;
width: 25px;
height: 20px;
position: relative;
}
`;

export const Line = styled.div`
width: 25px;
height: 3px;
background-color: #fff;
margin: 5px;
transition: transform 0.3s ease-in-out;

&:first-child {
transform: ${({ show }) => show ? 'rotate(45deg)' : 'rotate(0)'};
}

&:nth-child(2) {
opacity: ${({ show }) => show ? '0' : '1'};
}

&:last-child {
transform: ${({ show }) => show ? 'rotate(-45deg)' : 'rotate(0)'};
}
`;





