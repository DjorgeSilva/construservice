import styled from "styled-components"


export const Container = styled.nav`
    width: 100%;
    height: 70px;

    color: ${props => props.theme.secundary_color};
    position: fixed;
    top:  0;
    padding: 0 20px;
    z-index:1000;
`


export const Wrapper = styled.nav`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const Logo = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 950px){
       width: 20%;
    }

    img{
        width: 220px;
    }
`
export const Menu = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (min-width: 950px){
        display: none;
    }

    .icon-menu{
        cursor: pointer;
        color: ${props => props.theme.secundary_color};
        font-size: 2.5rem;

        &:hover{
            color: ${props => props.theme.ternary_color};
        }
    }
`

export const MenuDeskTop = styled.div`
    display: none;
    width: 80%;
    height: 100%;

    @media (min-width: 950px){
        display: block;
        display: flex;
        justify-content: flex-end;
    }

    nav{
        width: 80%;
        height: 100%;

        ul{
            width: 100%;
            height: 100%;
            list-style: none;

            display: flex;
            justify-content: space-around;
            align-items: center;

            li{
                .link{

                    font-size: clamp(1rem, 1vw, 1.2rem);
                    cursor: pointer;
                    color: ${props => props.theme.secundary_color};

                    &:hover{
                        color: ${props => props.theme.ternary_color};;
                        padding-bottom: 10px;
                        border-bottom: 3px solid ${props => props.theme.ternary_color};
                    }
                }
            }
        }
    }
`



export const MenuMobile = styled.div`
    width: 100%;
    height: 350px;
    background: ${props => props.theme.primary_color};
    position: fixed;
    top:${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    z-index:100;

    @media (min-width: 950px){
        display: none;
    }

    nav{
        width: 100%;
        height: 100%;
        padding-top: 50px; 
        display: flex;
        justify-content: center;
        align-items: center;

        ul{
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            li{
                margin-top: 10px;
                font-size: 1.4rem;

                .link{
                    cursor: pointer;
                    color: ${props => props.theme.secundary_color};
                    &:hover{
                        color: ${props => props.theme.ternary_color};;
                    }
                }
            }   
        }
    }
`