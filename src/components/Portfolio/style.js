import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background: ${props => props.theme.secundary_color};
    padding: 60px 0;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    h1{
        font-size: clamp(2.2rem, 2.5vw, 4rem);
        color: ${props => props.theme.primary_color};
        text-align: center;
        margin-bottom: 20px;
    }

    p{
        font-size: clamp(1.2rem, 2.5vw, 1.5rem);
        text-align: center;

        span{
            color: ${props => props.theme.ternary_color};
            font-weight: bolder;
            border-bottom: 2px solid ${props => props.theme.ternary_color};
            padding-bottom: 5px;
        }
    }

    button{
        display: block;
        outline: none;
        padding: 10px 50px;
        border-radius: 30px;
        border: none;
        font-size: 1.2rem;
        background: ${props => props.theme.ternary_color};
        color: ${props => props.theme.primary_color};
        margin-top: 20px;
        margin: 0 auto;

        &:hover{
            background: ${props => props.theme.primary_color};
            color: ${props => props.theme.secundary_color};
        }
    }
`