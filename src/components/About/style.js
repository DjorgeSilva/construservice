import styled from "styled-components";

export const EmpresaNumeros = styled.div`
    width: 100%;
    height: fit-content;
    background: #000;
    padding: 50px 10px;
    padding-top: 80px;

    h1{
        font-size: clamp(2.2rem, 2.5vw, 4rem);
        color: ${props=> props.theme.secundary_color};
    
        span{
            color: ${props=> props.theme.ternary_color};
        }
    }

    p{
        color: ${props=> props.theme.ternary_color};
        margin-bottom: 50px;
    }
    

    .row{
        width: 100%;
        height: fit-content;
        margin: 0 auto;

        .coluna-numeros{
            width: 100%;
            height: 280px;
            background: #fff;
            border: 1px solid #CDCDCD;
            text-align: center;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .icone{
                font-size: clamp(3rem, 3.5vw, 4rem);
                margin: 10px auto;
                color: ${props=> props.theme.ternary_color};
            }

            h5{
                font-size: clamp(2rem, 3.5vw, 2rem);
                color: #333;
            }

            h6{
                font-size: clamp(2rem, 3.5vw, 2rem);
                color: #333;
                color: ${props=> props.theme.ternary_color};
            }

            p{
                width: 90%;
                font-size: clamp(1.2rem, 3.5vw, 1.2rem);
                color: #333;
            }
        }
    }


`


export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 50px 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 992px){
        height: 100vh;
        flex-direction: row;
    }

`

export const Txt = styled.div`
    width: 100%;
    padding: 20px 0; 
    
    
    h1{
        font-size: clamp(2.2rem, 2.5vw, 4rem);
        color: ${props=> props.theme.ternary_color};
        
    }

    p{
        font-size: clamp(1.2rem, 2.5vw, 1.5rem);
        color: ${props=> props.theme.secundary_color};
        margin: 30px auto;
    }

    button{
        outline: none;
        padding: 10px 50px;
        border-radius: 30px;
        border: none;
        font-size: 1.2rem;
        background: ${props=> props.theme.ternary_color};
        color: ${props=> props.theme.primary_color};
        margin-top: 20px;

        &:hover{
            background: ${props=> props.theme.secundary_color};
        }
    }

`

export const IMG = styled.div`
    width: 100%;
    padding-top: 30px;

    @media (min-width: 950px){
        margin-left: 80px;
    }

    img{
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`
