import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { resetCart } from "../store/actions/product";
import CartItem from "./CartItem";
import styled from "styled-components";
import Button from "./Button";

const Box = styled.div`
    width: 24rem;

    padding: 1rem;
    margin-top: 2rem;
    margin-left: -0.4rem;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.textPrimary};
`
const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
`
const Pay = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    input[type=number] {
        border: none;
        border-bottom: 1px solid #333;
        text-align: right
        &:focus {
            outline:none;
        }
        &::-webkit-inner-spin-button,
        &::-wbkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
`
const Change = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;
`

const BtnBox = styled.div`
    display: flex;
    gap: 10px;
`

const CalculateBox = () => {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.products.carts)
    const total = carts.reduce((totalPrice, current) => totalPrice + current.price, 0)
    const [pay, setPay] = useState("")
    const [change, setChange] = useState("")
    const handleChange = e => {
        setPay(e.target.value)
    }
    const calculateChange = () => {
        if(pay > total) {
            setChange(pay - total)
        }
    }
    const reset = () => {
        dispatch(resetCart())
        setChange("")
        setPay("")
    }
    return(
        <Box>
            {carts.map(item => 
            <CartItem key={item.id} item={item}/>
            )}
            <Total>
                <h4>Total</h4>
                <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)}</p>
            </Total>    
            <Pay>
                <p>Jumlah bayar</p>
                <input type="number" value={pay} onChange={handleChange}/>
            </Pay>
            <Change>
                <p>Kembalian</p>
                <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(change)}</p>
            </Change>
            <BtnBox>
                <Button text="Reset" action={reset}></Button>
                <Button primary action={calculateChange} text="Selesai"></Button>
            </BtnBox>
        </Box>
    )
}

export default CalculateBox