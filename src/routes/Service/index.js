import React from 'react'
import { Row, Col } from "react-bootstrap"
import * as s from "./style"
import { DataService } from "./ServiceData"

export const Servicos = () => {

    const styles = {
        margin: "0 auto"
    }

    return (
        <>
            <s.Container>

                <s.WrapBanner>
                    <div class="parallax"></div>

                    <div className="innertxt">

                        <div className="container">
                            <h5>Serviços que <span>Nós </span>oferecemos</h5>
                        </div>

                    </div>
                </s.WrapBanner>

                <Row className="container" style={styles}>
                    {DataService.map((item) => {
                        return (
                            <Col sm={12} lg={4}>
                                <s.ItemGrid>
                                    <img src={item.img} alt="" />
                                    <h3>{item.service_name}</h3>
                                    <p>{item.desc}</p>
                                </s.ItemGrid>
                            </Col>
                        )
                    })}
                </Row>

            </s.Container>

        </>
    )
}
