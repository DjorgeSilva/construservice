import styled from "styled-components"

export const Container  = styled.div`
    width: 100%;
    height: fit-content;
    background: ${props=> props.theme.secundary_color};
    padding: 60px 0;

    /* @media (min-width: 997px){
        height: 100vh;
    } */

    h1{
        font-size: clamp(2.2rem, 2.5vw, 4rem);
        color: ${props=> props.theme.primary_color};
        text-align: center;
        
    }


`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`