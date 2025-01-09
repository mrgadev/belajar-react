import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
    border: none;
    padding: 0.2rem 0.5rem;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:focus {
    outline: none;
    }
`

const PrimaryButton = styled(MyButton)`
    background: ${props => props.theme.textPrimary};
    border-radius: 25px;
    padding: 1rem;
    font-family: "Sora Light";
`
const WarningButton = styled(MyButton)`
    background: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.textPrimary};
    border-radius: 25px;
    padding: 1rem;
    font-family: "Sora Medium";
    border: 2px solid ${props => props.theme.textPrimary};
`

const Button = ({primary, action, text}) => {
    if(primary) {
        return <PrimaryButton onClick={action}>{text}</PrimaryButton>
    } else {
        return <WarningButton onClick={action}>{text}</WarningButton>
    }
}

export default Button