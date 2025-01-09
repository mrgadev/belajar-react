import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { inc,dec,removeFromCart } from "../store/actions/product";
import { useDispatch, useSelector } from "react-redux";
const Cart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;

    background: #fff;
`
const CartContainer = styled.div`
    display:flex;
    flex-direction: column;
`
const CounterContainer = styled.div`
    display: flex;
    width: 30%;
    text-align: center;
`
const CounterTotal = styled.div`
    margin: 0 0.3rem;
`
const ItemName = styled.div`
    width: 40%;
`

const Price = styled.div`
    text-align: center;
`

const CartItem = ({item}) => {
    const [count, setCount] = useState(1)
    const carts = useSelector(state => state.products.carts)
    const dispatch = useDispatch()
    const increment = id => {
        setCount(count + 1)
        dispatch(inc(id))
    }
    
    const decrement = id => {
        setCount(count - 1)
        if(count > 1) {
            dispatch(dec(id))
        } else if (count === 1) {
            dispatch(removeFromCart(id))
        }
    }
    return(
        <CartContainer>
            <h4>Item yang Dipilih {carts ? ` (${carts.length}) item(s)` : ` (0)`}</h4>
        <Cart>
            <ItemName>
                {item.name}
            </ItemName>
            <CounterContainer>
                <Counter inc={() => increment(item.id)}/>
                <CounterTotal>{count}</CounterTotal>
                <Counter dec={() => decrement(item.id)}/>
            </CounterContainer>
            <Price>
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}
            </Price>
        </Cart>
        </CartContainer>
    )
}

export default CartItem