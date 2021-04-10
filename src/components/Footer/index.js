import React from 'react'
import { Row, Col } from "react-bootstrap";
import * as S from "./styles.js"
import { Link } from "react-router-dom";
import LogoIMG from "../../assets/img/logo.png";

export const Footer = () => {
    return (
        <>
            <S.FooterContainer className="container">
                <S.FooterLogo>
                    <img src={LogoIMG} alt="" />
                </S.FooterLogo>

                <S.FooterGrid>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <S.FooterGridItem>
                                <h1>Endereço</h1>
                                <p><i class="fas fa-map-marker-alt"></i>Travessa Teresina, 2404</p>
                                <p><i class="fas fa-home"></i>Constru Service LTDA</p>
                                <p><i class="fas fa-map-marked-alt"></i>Codó Novo - MA</p>
                                <p><i class="fas fa-compass"></i>CEP: 65400-000</p>
                            </S.FooterGridItem>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <S.FooterGridItem>
                                <h1>Contato</h1>
                                <p><i class="fas fa-phone"></i>+55 99 98144-4269</p>
                                <p><i class="fas fa-phone"></i>+55 99 99836-9214</p>
                                <p><i class="far fa-envelope"></i>construservice@gmail.com</p>
                            </S.FooterGridItem>
                        </Col>

                        <Col sm={12} lg={4} >
                            <S.FooterGridItemRedesSociais>
                                <h2>Rede Sociais</h2>
                                <h3>Siga-nos em nossas redes sociais</h3>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/" style={{ textDecoration: "none" }}>
                                                <i class="fab fa-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" style={{ textDecoration: "none" }}>
                                                <i class="fab fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" style={{ textDecoration: "none" }}>
                                                <i class="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </S.FooterGridItemRedesSociais>
                        </Col>

                    </Row>
                </S.FooterGrid>

            </S.FooterContainer>
        </>
    )
}