import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/actions/product";
import CalculateBox from "./CalculateBox";
const Card = styled.div`
    width: 17%;
    height: 12rem;
    cursor: pointer;
`
const CardImg = styled.img`
    width: 100%;
    height: 75%;

`
const ProductNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 5px;
`

const ProductName = styled.p`
    font-size: 1.1rem;
    color: #333;
`
const ProductPrice = styled.p`
    font-size: 0.9rem;
    font-family: "Sora Semibold";
    color: ${props => props.theme.textPrimary};
`

const ProductCategory = styled.p`
    font-size: 0.7rem;
    color: ${props => props.theme.textPrimary};
    background: ${props => props.theme.bgPrimary};
    padding: 0.4rem;
    width: fit-content;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.textPrimary};
`


const ProductCard = ({item}) => {
    // const [carts, setCart] = useState([]);
    const dispatch = useDispatch()
    const addToCart = (id) => {
        dispatch(addCart(id))

    }
    return(
        <Card onClick={() => addToCart(item.id)}>
            <CardImg src={item.image} alt={item.name}/>
            <ProductNameContainer>
                <ProductCategory>{item.category}</ProductCategory>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</ProductPrice>
            </ProductNameContainer>
        </Card>
    )
}

export default ProductCard