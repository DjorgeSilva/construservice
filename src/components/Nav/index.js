import React, { useEffect } from 'react'
import * as S from "./styles"
import LOGO from "../../assets/img/logo-transparent.png"
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"
import border_nav from "../../assets/img/traçado.png";

export const Nav = ({ isOpen, setIsOpen }) => {

    // nav transparente quando no topo
    var show = null;

    useEffect(() => {
        const handleScroll = () => {
            var links = document.querySelectorAll(".menu-link");

            show = window.scrollY > 0

            if (show) {
                document.querySelector("#menu").style.background = "#000";
                document.querySelector("#menu").style.borderBottom = ".4rem solid transparent";
                document.querySelector("#menu").style.borderImage = `url(${border_nav}) 30 round`;

            } else {
                document.querySelector("#menu").style.background = "transparent";
                document.querySelector("#menu").style.borderBottom = "none";
                document.querySelector("#menu").style.borderImage = 'none';


            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    // nav transparente quando no topo

    return (
        <>
            <S.Container id="menu">
                <S.Wrapper className="container">

                    <Link to="/" style={{ cursor: "pointer" }}>
                        <S.Logo>
                            <img src={LOGO} alt="logo" />
                        </S.Logo>
                    </Link>

                    <S.Menu onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ?
                            <IoClose className="icon-menu" /> :
                            <IoMenu className="icon-menu" />
                        }
                    </S.Menu>

                    <S.MenuDeskTop>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/quem-somos" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Quem somos</Link>
                                </li>
                                <li>
                                    <Link to="/servicos" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Serviços</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Portfólio</Link>
                                </li>
                                <li>
                                    <Link to="/contato" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Contato</Link>
                                </li>
                            </ul>
                        </nav>
                    </S.MenuDeskTop>

                </S.Wrapper>
            </S.Container>

            <S.MenuMobile isOpen={isOpen}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/quem-somos" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Quem somos</Link>
                        </li>
                        <li>
                            <Link to="/servicos" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Serviços</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Portfólio</Link>
                        </li>
                        <li>
                            <Link to="/contato" style={LinkStyle} className="link" onClick={() => setIsOpen(!isOpen)}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </S.MenuMobile>
        </>
    )
}


const LinkStyle = {
    textDecoration: "none"
}