import React from 'react'
import {Col, Row} from 'react-bootstrap'
import AboutIMG from "../../assets/img/about-img.jpg"
import * as s from "./style.js"
import { Link } from "react-router-dom";
import {GoPerson} from "react-icons/go"
import {GiMineTruck} from 'react-icons/gi'

export const About = () => {
    return (
        <>
            <s.EmpresaNumeros className="container">
                <h1>A <span>Construservice</span> em números </h1>
                <p>atualizado em 16/04/2021</p>

                <Row className="row">
                    <Col xs={12} md={6} className="coluna-numeros">
                        <GoPerson className="icone"/>
                        <h5>+200</h5>
                        <h6>Colaboradores</h6>
                        <p>Pessoas formadas desde os cargos de base até especialistas em diversas áreas.</p>       
                    </Col>

                    <Col xs={12} md={6} className="coluna-numeros">
                        <GiMineTruck className="icone"/>
                        <h5>+150</h5>
                        <h6>Obras</h6>
                        <p>Comprometimento em entregar obras inovadoras para todo o território brasileiro.</p>       
                    </Col>

                    <Col xs={12} md={6} className="coluna-numeros">
                        <GoPerson className="icone"/>
                        <h5>+3 Estados</h5>
                        <h6>MA, TO, GO</h6>
                        <p>Sede no Maranhão, Tocantins e  e Goiás.</p>       
                    </Col>

                    <Col xs={12} md={6} className="coluna-numeros">
                        <GoPerson className="icone"/>
                        <h5>+200</h5>
                        <h6>Colaboradores</h6>
                        <p>Pessoas formadas desde os cargos de base até especialistas em diversas áreas.</p>       
                    </Col>
                </Row>
            </s.EmpresaNumeros>

            <s.Container className="container">
                <s.Txt>
                    <h1>Sobre a Construservice</h1>
                    <p>A Construservice presta serviços na área de construção civíl para incorporadoras e empresas. Contamos com profissionais especializados, que buscam constantemente o conhecimento, resultando em tecnologia e inovação para entregar obras diferenciadas, com o foco na qualidade, de acordo com o perfil de seus clientes.</p>
                    <Link to="/quem-somos">
                        <button>Saiba mais</button>
                    </Link>
                </s.Txt>

                <s.IMG>
                    <img src={AboutIMG} alt="imagens da contru service" />
                </s.IMG>
            </s.Container>
        </>
    )
}
