import React from "react";
import styled from "styled-components";

const Head = styled.div`
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Sora Regular";
    background: ${props => props.theme.textPrimary};
    color: ${props => props.theme.light};
`

const Header = () => {
    return(
        <Head>
            <h1>Kasir</h1>
        </Head>
    )
}

export default Header