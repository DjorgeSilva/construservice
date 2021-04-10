import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background: ${props => props.theme.ternary_color};
    padding: 20px 0;

    @media (min-width: 992px){
        height: 100vh;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
        
    h1{
        font-size: clamp(2.5rem, 2.5vw, 4rem);
        color: ${props => props.theme.primary_color};
        text-align: center;
    }

    p{
        font-size: clamp(1.2rem, 2.5vw, 1.5rem);
        color: ${props => props.theme.primary_color};
        margin: 30px auto;
        text-align: center;
    }

    .item-servico-col{
        cursor: pointer;
        width: 100%;
        height: 280px;
        margin: 20px auto;

        .inner-txt{
            width: 100%;
            height: 100%;
            border-radius: 20px;
            background: rgba(0, 0, 0, 1);
            position: relative;

            &:hover > img{
                opacity: .3;
            }

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
                position: relative;
            }

            h1{
                width: fit-content;
                font-size: clamp(2rem, 2.5vw, 2rem);
                background:#F5C32E;
                border-radius: 10px;
                color: #000;
                padding: 0 8px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
                
        }   

    }

    button{
        display: block;
        outline: none;
        padding: 10px 50px;
        border-radius: 30px;
        border: none;
        font-size: 1.2rem;
        background: ${props => props.theme.primary_color};
        color: ${props => props.theme.secundary_color};
        margin: 0 auto;
        margin-top: 20px;

        &:hover{
            background: ${props => props.theme.secundary_color};
            color: ${props => props.theme.primary_color};
        }
    }
`
