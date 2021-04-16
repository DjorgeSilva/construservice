import React from 'react'
import * as s from './style.js'
import { Row, Col } from "react-bootstrap"
import imgAbout from "../../../assets/img/adm20.jpg"
import { Slider } from '../SliderOwl/Index.js'
import {DataTodos} from "../SliderOwl/Data"
import {DataSede} from "../SliderOwl/DataSede"

export const About = () => {

    const p_style = {
        textAlign: "center"
    }

    return (
        <s.Container>

            <s.WrapBanner>
                <div class="parallax"></div>

                <div className="innertxt">

                    <div className="container">
                        <h5>Sobre a <span>Construservice</span></h5>
                    </div>

                </div>
            </s.WrapBanner>

            <s.Main className="container">
                <Row>

                    <Col xs={12} md={6} className="coluna">
                        <img src={imgAbout} alt="funcionario da constru service" />
                    </Col>

                    <Col xs={12} md={6} className="coluna">
                        <p>
                            A empresa iniciou suas atividades na incorporação, construção e comercialização de habitações residenciais populares na Grande São Paulo em 2011, com a denominação de Ébano Construções e Empreendimentos Ltda.
                                    Em 2017, com a entrada de novos acionistas, a empresa muda sua sede e passa a se chamar constru service Ltda., com foco em incorporação e na prestação de serviços para incorporadoras e empresas. Política da Qualidade</p>

                        <p>A empresa iniciou suas atividades na incorporação, construção e comercialização de habitações residenciais populares na Grande São Paulo em 2011, com a denominação de Ébano Construções e Empreendimentos Ltda.</p>
                        <p>Em 2017, com a entrada de novos acionistas, a empresa muda sua sede e passa a se chamar constru service Ltda., com foco em incorporação e na prestação de serviços para incorporadoras e empresas.</p>
                    </Col>


                    <Col xs={12} md={12} className="coluna coluna-politica">
                        <h1>Politica de Qualidade</h1>
                        <p>A Construservice se compromete a satisfazer aos seus clientes com respeito, sustentabilidade e responsabilidade no relacionamento com colaboradores, fornecedores, comunidade e meio ambiente, atendendo aos requisitos e garantindo a melhoria contínua do Sistema de Gestão da Qualidade.</p>


                        <Row>
                            <Col xs={12} md={4} className="coluna coluna-grid">
                                <h6>Missão</h6>
                                <p style={p_style}>Contribuir para o desenvolvimento e crescimento da pavimentação asfáltica brasileira, produzindo asfalto de qualidade e proporcionando a satisfação no relacionamento com nossos clientes e colaboradores.</p>
                            </Col>

                            <Col xs={12} md={4} className="coluna coluna-grid">
                                <h6>Visão</h6>
                                <p style={p_style}>Ser referência no mercado atual, superando os padrões e gerando inovação e resultado frente a nossos clientes, contribuindo para um mundo melhor e sustentável.</p>
                            </Col>

                            <Col xs={12} md={4} className="coluna coluna-grid">

                                <h6>Valores</h6>

                                <ul style={p_style}>

                                    <li style={{ marginTop: "20px" }}>
                                        Confiabilidade: somos éticos e transparentes. Buscamos desenvolver parcerias estratégicas com os clientes, fornecedores e colaboradores.
                                    </li>

                                    <li style={{ marginTop: "20px" }}>
                                        Ética: agir de acordo com os valores que norteiam uma conduta íntegra, transparente e honesta.
                                    </li>

                                    <li style={{ marginTop: "20px" }}>
                                        Qualidade e sustentabilidade: buscamos melhorar continuamente, através do trabalho em equipe, com práticas de gestão nas áreas de responsabilidade social e meio-ambiente, garantindo o sucesso do nosso negócio.
                                    </li>

                                </ul>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </s.Main>

            <Slider DataTodos={DataSede} title="Nossa Sede"/>

            <Slider DataTodos={DataTodos} title="Nossos Colaboradores"/>

        </s.Container>
    )
}
