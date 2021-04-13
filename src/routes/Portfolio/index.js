import React, {useState} from 'react'
import { Row, Col } from "react-bootstrap"
import * as s from "./style.js"
import { IoClose } from "react-icons/io5"
import { DataPortfolio } from "./DataPortfolio.js"

export const Portfolio = () => {

    const [infoModal, setInfoModal] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const style = {
        textDecoration: "none"
    }

    const handleModal = (item) => {
        setInfoModal(item);
        setOpenModal(!openModal);
    }


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
                            <Col sm={6} lg={4} onClick={() => handleModal(item)}>
                                <s.ItemGrid>
                                    <img src={item.img} alt={item.alt} />
                                    <h3>{item.alt}</h3>
                                </s.ItemGrid>
                            </Col>
                        )
                    })}
                </Row>

                <s.MoreInfo onClick={() => setOpenModal(!openModal)} openModal={openModal}>

                    <IoClose className='icone' />

                    <div className="more-info">
                        <img src={infoModal.img} alt={infoModal.desc}/>
                        <h6>{infoModal.alt}</h6>
                    </div>

                </s.MoreInfo>
            </s.Container>
        </>
    )
}
