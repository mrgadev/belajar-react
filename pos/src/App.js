import React from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import {useSelector} from "react-redux";
import styled,{ ThemeProvider } from "styled-components";
import * as theme from "./styled/theme"
import CartItem from "./components/CartItem";
import ListMenu from "./components/ListMenu";
import CalculateBox from "./components/CalculateBox";
import "./App.css"
import "./fonts/Sora-Bold.ttf"
import "./fonts/Sora-ExtraBold.ttf"
import "./fonts/Sora-ExtraLight.ttf"
import "./fonts/Sora-Light.ttf"
import "./fonts/Sora-Medium.ttf"
import "./fonts/Sora-Regular.ttf"
import "./fonts/Sora-SemiBold.ttf"
import "./fonts/Sora-Thin.ttf"

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
  font-family: "Sora Medium";
`

const MenuContainer = styled.div`
  width: 15%;
  padding: 2rem 0;
  padding-right: 0.5rem;
`

const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  background: ${props => props.theme.light};
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CartContainer = styled.div`
  width: 25%;
  margin: 3rem 1rem;

`

const App = () => {
  const products = useSelector((state) => state.products.filteredProducts)
  console.log(products)
  const carts = useSelector(state => state.products.carts)
  return(
    <ThemeProvider theme={theme}>
      <Header/>
      <Container>
        <MenuContainer>
          <ListMenu/>
        </MenuContainer>
        <ProductContainer>
          {products.map(product =>
            <ProductCard key={product.id} item={product}/>
          )}
        </ProductContainer>
        <CartContainer>
          <p></p>
          
          <CalculateBox>
            
          </CalculateBox>
        </CartContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App;
