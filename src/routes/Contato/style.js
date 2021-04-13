import styled from 'styled-components'
import banner from "../../assets/img/about-banner.jpg"

export const Container = styled.div`
    width: 100%;
    height: fit-content;    
    margin-top: 80px;
    background: ${props => props.theme.secundary_color};
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
                
                span{
                    color: ${props => props.theme.ternary_color};
                }
        }
        }
        

    }
`

export const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 35px 0;

    form{
        width: 90%;
        margin: 30px auto;
        border: 2px solid ${props => props.theme.ternary_color};
        border-radius: 5px;
        padding: 20px;

        @media (min-width: 850px){
            width: 750px;
        }

        h1{
            text-align: center;
            font-size: clamp(1.4rem, 2.5vw, 1.5rem);
            text-transform: uppercase;
        }

        label{
            width: 100%;
            margin: 13px auto;
        }

        input,
        select{
            width: 100%;
            height: 35px;
            padding-left: 10px;
            border-radius: 5px;
            border: 1px solid #333;
        }


        textarea{
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #333;
        }
    }

    .row{
        margin: 0 auto;

        @media (min-width: 850px){
            width: 815px;
        }

        
        .coluna{
        width: 100%;
        padding: 30px;
        border: 2px solid ${props => props.theme.ternary_color};
        margin-bottom: 20px;

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
    }

`

export const GridContato = styled.div`
    width: 100%;
    height: 250px;
    border: 2px solid #F5C32E;
    border-radius: 5px;
    box-shadow: 5px 5px 15px #b3b3b3;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px 10px;

    i{
        font-size: 4rem;
    }
    h1{
        text-transform: initial;
        font-size: clamp(1.2rem, 2.5vw, 1.2rem);
    }
    a{
        margin: 0;
        padding: 0;
    }
`;
