import styled from "styled-components"
import banner from "../../../assets/img/trabalheconosco.jpg"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background: #fff;
`

export const WrapBanner = styled.div`
    height: 50vh;
    position: relative;

    .parallax {
        background-image: url(${banner});
        min-height: 50vh; 
        background-attachment: fixed;
        background-position-y: -200px;
        background-repeat: no-repeat;
        background-size: cover;

        @media (min-width: 997px){
            background-position-y: -400px;
        }
    }
    .innertxt{
        width: 100%;
        height: 50vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        background: rgba(0, 0, 0, .7);

        display: flex;
        justify-content: center;
        align-items: center;

        .container{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            h5{
                width: fit-content;
                margin: 0 auto;
                font-size: clamp(1.8rem, 4vw,3rem);
                color: ${props => props.theme.secundary_color};
                padding: 10px 20px;
                border-radius: 50px;
                
                span{
                    color: ${props => props.theme.ternary_color};
                    text-transform: uppercase;
                }
        }
        }
        

    }
`

export const Main = styled.div`
    width: 100%;
    height: fit-content;
    padding: 50px 0;

    h4{
        font-size: clamp(1.5rem, 2.5vw, 2.6rem);
        text-align: center;
        color: #013E83;
    }

    h5{
        font-size: clamp(1.2rem, 2.5vw, 2rem);
        text-align: center;
        margin-top: 10px;
        color: #333;
        margin-bottom: 40px;
    }

    .row-item-vagas{

        @media (min-width: 770px){
            width: 770px;
            margin: 0 auto;
        }
    }
`

export const Vagas = styled.div`
    width: 90%;
    height: 260px;
    margin: 0 auto;
    border-radius: 20px;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    background: #000;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h6{
        font-size: clamp(1.2rem, 2.5vw, 1.3rem);
        color: #F5C32E;
        margin-bottom: 15px;
    }

    p{
        font-weight: bold;
        margin: 5px;
        color: #fff;
    }

    span{
        font-weight: lighter;
    }
    
    button{
        width:160px;
        padding: 4px 0;
        border-radius: 20px;
        margin-top: 10px;
        border: none;
        color: #fff;
        background: #1780f8;

        &:hover{
            background: #003E83;
        }

    }
`