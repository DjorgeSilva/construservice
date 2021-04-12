import styled from "styled-components"
import banner from "../../assets/img/contato-bg.jpeg"

export const WrapBanner = styled.div`
    height: 50vh;
    position: relative;

    .parallax {
        background-image: url(${banner});
        min-height: 50vh; 
        background-attachment: fixed;
        background-position: center;
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
        background: rgba(0, 0, 0, .5);

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
            font-size: clamp(1.2rem, 4vw,3rem);
            color: ${props => props.theme.secundary_color};;
            text-transform: uppercase;
            padding: 10px 20px;
            border-radius: 50px;
        }

        button{
            outline: none;
            padding: 10px 50px;
            border-radius: 30px;
            border: none;
            font-size: 1.2rem;
            background: ${props => props.theme.ternary_color};
            color: ${props => props.theme.primary_color};
            margin-top: 20px;

            &:hover{
                background: ${props => props.theme.secundary_color};
            }
        }
        }
        

    }
`