import React from 'react'
import * as s from './style.js'
import { Row, Col } from "react-bootstrap"
import Map from "../../components/Map"
import imgAbout from "../../assets/img/slider-4.jpg"

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
                        <h5>Sobre a <span>Constru service</span></h5>
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
                        <p>A BauTechnik Construções Especiais se compromete a satisfazer aos seus clientes com respeito, sustentabilidade e responsabilidade no relacionamento com colaboradores, fornecedores, comunidade e meio ambiente, atendendo aos requisitos e garantindo a melhoria contínua do Sistema de Gestão da Qualidade.</p>


                        <Row>
                            <Col xs={12} md={4} className="coluna coluna-grid">
                                <h6>Missão</h6>
                                <p style={p_style}>Oferecer produtos e serviços no mais alto grau de qualidade e inovação, com respeito e responsabilidade no relacionamento com colaboradores, clientes, fornecedores e a comunidade, criando condições de crescimento e de perpetuidade.</p>
                            </Col>

                            <Col xs={12} md={4} className="coluna coluna-grid">
                                <h6>Visão</h6>
                                <p style={p_style}>Concretizar sonhos superando as expectativas. Acreditamos que os clientes analisam não somente o produto, mas também a forma que os serviços são oferecidos; Ser uma empresa que aposta em serviços direcionados; Ser uma empresa que aposta.</p>
                            </Col>

                            <Col xs={12} md={4} className="coluna coluna-grid">
                                <h6>Valores</h6>
                                <p style={p_style}>Ser transparente, ético, agir com respeito e cidadania; Acreditar no ser humano e na sua capacidade e desejo para evoluir; Desenvolver pessoas por meio da educação pelo e para o trabalho; Desenvolver pessoas por meio da educação pelo e para o trabalho.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </s.Main>



        </s.Container>
    )
}
