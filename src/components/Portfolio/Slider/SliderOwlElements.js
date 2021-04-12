import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    text-align: center;
    padding: 30px 0;
    text-align: center;

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
            background: #0000;
            padding: 20px;
            text-transform: uppercase;
        }
    
    }
    }
`