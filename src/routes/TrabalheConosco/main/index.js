import React from 'react'
import { Row, Col } from "react-bootstrap"
import { Filtros } from '../Filtros'
import * as s from "./styled"
import vagas from "../Data/DataVagas"

export const TrabalheConosco = () => {
    return (
        <s.Container>
            <s.WrapBanner>
                <div class="parallax"></div>

                <div className="innertxt">

                    <div className="container">
                        <h5>Trabalhe <span>Conosco</span></h5>
                    </div>

                </div>
            </s.WrapBanner>

            <Filtros />

            <s.Main className="container">
                <h4>Oportunidades disponíveis</h4>
                <h5>31 processos abertos</h5>

                <Row className="row-item-vagas">
                    {vagas ?
                        vagas.map((item) => {
                            return (
                                <Col xs={12} md={6}>
                                    <s.Vagas>
                                        <h6>{item.desc}</h6>
                                        <p>Nível: <span>{item.nivel}</span></p>
                                        <p>Contarto: <span>{item.contrato}</span></p>
                                        <p>Localização: <span>{item.location}</span></p>
                                    
                                        <button type="button">Candidatar</button>
                                    </s.Vagas>
                                </Col>
                            )
                        })
                        : "não há vagas disponivél"}
                </Row>

            </s.Main>

        </s.Container>
    )
}
