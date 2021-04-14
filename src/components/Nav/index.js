import React, { useEffect, useState } from 'react'
import * as S from "./styles"
import LOGO from "../../assets/img/logo-transparent.png"
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"
import { IoMdArrowDropdown } from "react-icons/io"
import { IoMdArrowDropup } from "react-icons/io"
import border_nav from "../../assets/img/traçado.png";

export const Nav = ({ isOpen, setIsOpen }) => {

    const [isOpenMais, setIsOpenMais] = useState(false);

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

    const handleClickLink = () =>{
        setIsOpen(!isOpen)
        setIsOpenMais(false)
    }

    return (
        <>
            <S.Container id="menu">
                <S.Wrapper className="container">

                    <Link to="/" style={{ cursor: "pointer" }}>
                        <S.Logo>
                            <img src={LOGO} alt="logo" />
                        </S.Logo>
                    </Link>

                    <S.Menu onClick={handleClickLink}>
                        {isOpen ?
                            <IoClose className="icon-menu" /> :
                            <IoMenu className="icon-menu" />
                        }
                    </S.Menu>

                    <S.MenuDeskTop>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" style={LinkStyle} className="link" onClick={handleClickLink}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/quem-somos" style={LinkStyle} className="link" onClick={handleClickLink}>Quem somos</Link>
                                </li>
                                <li>
                                    <Link to="/servicos" style={LinkStyle} className="link" onClick={handleClickLink}>Serviços</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" style={LinkStyle} className="link" onClick={handleClickLink}>Portfólio</Link>
                                </li>
                                <li>
                                    <Link to="/contato" style={LinkStyle} className="link" onClick={handleClickLink}>Contato</Link>
                                </li>

                                <li className="li-mais" onClick={() => setIsOpenMais(!isOpenMais)}>
                                    Mais
                                    {isOpenMais ?
                                        <>
                                            <IoMdArrowDropup className="icone-mais" />
                                            <div className="box-more-info">
                                                <Link to="/trabalhe-conosco" style={LinkStyle} className='link-mais'>
                                                    Trabalhe Conosco
                                                </Link>

                                                <Link to="/trabalhe-conosco" style={LinkStyle} className='link-mais'>
                                                    Mais opções
                                                </Link>

                                                <Link to="/trabalhe-conosco" style={LinkStyle} className='link-mais'>
                                                    Mais opções
                                                </Link>
                                            </div>
                                        </>
                                        :
                                        <IoMdArrowDropdown className="icone-mais" />
                                    }

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
                            <Link to="/" style={LinkStyle} className="link" onClick={handleClickLink}>Home</Link>
                        </li>
                        <li>
                            <Link to="/quem-somos" style={LinkStyle} className="link" onClick={handleClickLink}>Quem somos</Link>
                        </li>
                        <li>
                            <Link to="/servicos" style={LinkStyle} className="link" onClick={handleClickLink}>Serviços</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" style={LinkStyle} className="link" onClick={handleClickLink}>Portfólio</Link>
                        </li>
                        <li>
                            <Link to="/contato" style={LinkStyle} className="link" onClick={handleClickLink}>Contato</Link>
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