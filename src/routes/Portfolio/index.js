import React from 'react'
import { Row, Col } from "react-bootstrap"
import * as s from "./style.js"
import { DataPortfolio } from "./DataPortfolio.js"

export const Portfolio = () => {
    return (
        <>
            <s.Container>

                <s.WrapBanner>
                    <div class="parallax"></div>

                    <div className="innertxt">

                        <div className="container">
                            <h5><span>Nosso </span>Portfólio</h5>
                        </div>

                    </div>
                </s.WrapBanner>

                <Row className="container">
                    {DataPortfolio.map((item) => {
                        return (
                            <Col sm={6} lg={4}>
                                <s.ItemGrid>
                                    <img src={item.img} alt={item.alt} />
                                    <h3>{item.alt}</h3>
                                </s.ItemGrid>
                            </Col>
                        )
                    })}
                </Row>
            </s.Container>
        </>
    )
}
