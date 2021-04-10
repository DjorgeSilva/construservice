import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background: ${props => props.theme.ternary_color};
    padding: 20px 0;
    position: relative;

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
                opacity: .1;
            }

            &:hover >   h1{
                background: #fff; 
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
                font-size: clamp(1.5rem, 2.5vw, 2rem);
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

export const MoreInfo = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .9);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${({ openModal }) => (openModal ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    z-index: 1000;

    .icone{
        cursor: pointer;
        color: #fff;
        margin-bottom: 50px;
        font-size: 3rem;

        &:hover{
            color: ${props => props.theme.ternary_color};
        }

    }

    .more-info{
        width: 80%;
        height: 50%;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px 10px;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media (min-width: 650px){
            width: 600px;
            padding: 20px;
        }
        
        h6{
            font-size: clamp(1.5rem, 2.5vw, 2rem);
            color: #333;
            text-align: center;
            margin: 20px;
        }
        p{
            font-size: clamp(1rem, 2.5vw, 1.4rem);
        }
    }

`