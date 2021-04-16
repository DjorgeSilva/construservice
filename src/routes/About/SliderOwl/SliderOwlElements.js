import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    text-align: center;
    padding: 30px 0;
    text-align: center;

    h1{
        margin-bottom: 50px;
    }

    hr{
        width: 250px;
        margin: 0 auto;
        border: 3px solid ${props => props.theme.ternary_color};
        background: ${props => props.theme.ternary_color};
        margin-bottom: 50px;
    }

    .owl-theme{
        width: 100%;
        position: relative;

        .owl-nav .owl-prev,
        .owl-nav .owl-next{
            width: 40px;
            height: 80px;
            outline: none;
            background: ${props => props.theme.ternary_color};
            font-size: 4rem;
            position: absolute;
            top: 27%;
            color: ${props => props.theme.primary_color};

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .owl-nav .owl-prev{
            left: 0;
            &:hover{
                background: ${props => props.theme.secundary_color};
                color: #000;
            }
        }
        .owl-nav .owl-next{
            right: 0;
            &:hover{
                background: ${props => props.theme.secundary_color};
                color: #000;
            }
        }

        .item{
            cursor: pointer;
            background: ${props => props.theme.ternary_color};
            margin-bottom: 40px;
        

            .box-img{
                height: 80%;
                overflow-x: hidden;
                img{
                    height: 100%;
                    object-fit: cover;   
                    position: relative;
                }
        }

        .txt-box{
            height: 30px;
            background: #0000;
            text-transform: uppercase;
            padding-top: 7px;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            h6{
                font-size: .9rem;
            }
        }
    
    }
    }
`