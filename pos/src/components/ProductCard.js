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
    height: 50%;

`
const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;

`


const ProductCard = ({item}) => {
    const [cart, setCart] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch()
    const addToCart = (product,id) => {
        dispatch(addCart(id))
        const existingProduct = cart.find(item => item.id === product.id);
        if(existingProduct) {
            // setSelectedProduct(product);
            setShowAlert(true);
        }
    }
    return(
        <Card onClick={() => addToCart(item.id)}>
            <CardImg src={item.image} alt={item.name}/>
            <NamePrice>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </NamePrice>
        </Card>
    )
}

export default ProductCard