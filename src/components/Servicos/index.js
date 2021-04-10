import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import * as S from "./style"
import Data from './Data'

export const Servicos = () => {

    const style = {
        textDecoration: "none"
    }

    return (
        <S.Container>

            <S.Wrapper className="container">
                <h1>Nossa áreas de atuação</h1>
                <p>A Constru Service possui experiência em projetos e consultoria das mais variadas soluções em engenharia, tendo realizado serviços em diversos Estados do Brasil.</p>

                <Row>
                    {Data && Data.map((item) => {
                        return (
                            <Col xs={12} md={6} lg={4} className="item-servico-col">

                                <div className="inner-txt">
                                    <img src={item.img} alt={item.alt} />
                                    <h1>{item.desc}</h1>
                                </div>

                            </Col>
                        )
                    })}
                </Row>

                <Link to="/servico" style={style}>
                    <button type="button">Saiba mais</button>
                </Link>

            </S.Wrapper>


        </S.Container>
    )
}
