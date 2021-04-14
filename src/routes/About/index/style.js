import styled from 'styled-components'
import banner from "../../../assets/img/funcionario2.jpg"

export const Container = styled.div`
    width: 100%;
    height: fit-content;    
    background: ${props=> props.theme.secundary_color};
`

export const WrapBanner = styled.div`
    height: 50vh;
    position: relative;

    .parallax {
        background-image: url(${banner});
        min-height: 50vh; 
        background-attachment: fixed;
        background-position-y: -100px;
        background-repeat: no-repeat;
        background-size: cover;
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
                text-transform: uppercase;
                
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
    height: 100%;
    padding: 35px 0;

    .coluna{
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p{
            font-size: clamp(1rem, 2.5vw, 1.2rem);
        }

        img{
            width: 100%;
        }
    }

    .coluna-politica{
        display: block;

        h1{
            text-align: left;
            margin: 20px auto;
        }

        .coluna-grid{
            margin-top: 20px; 

            background: ${props => props.theme.primary_color};
            color: ${props => props.theme.ternary_color};
            border: 2px solid #fff;

            h6{
                font-size: clamp(1rem, 2.5vw, 1.2rem);
                color: ${props => props.theme.secundary_color};
                margin: 20px auto;
                text-transform: uppercase;
            }
        }
    }
`
