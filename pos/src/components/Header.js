import React from "react";
import styled from "styled-components";

const Head = styled.div`
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Sora Semibold";
    background: ${props => props.theme.primary};
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