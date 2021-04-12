import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { IoClose } from "react-icons/io5"
import * as S from "./style"
import Data from './Data'

export const Servicos = () => {

    const [infoModal, setInfoModal] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const style = {
        textDecoration: "none"
    }

    const hancleModal = (item) => {
        setInfoModal(item);
        setOpenModal(!openModal);
    }

    return (
        <S.Container>

            <S.Wrapper className="container">
                <h1>Nossa áreas de atuação</h1>
                <p>A Constru Service possui experiência em projetos e consultoria das mais variadas soluções em engenharia, tendo realizado serviços em diversos Estados do Brasil.</p>

                <Row>
                    {Data && Data.map((item) => {
                        return (
                            <Col xs={12} md={6} lg={4} className="item-servico-col" onClick={() => hancleModal(item)}>

                                <div className="inner-txt">
                                    <img src={item.img} alt={item.alt} />
                                    <h1>{item.desc}</h1>
                                </div>

                            </Col>
                        )
                    })}
                </Row>

                <Link to="/servicos" style={style}>
                    <button type="button">Saiba mais</button>
                </Link>

            </S.Wrapper>

            <S.MoreInfo onClick={() => setOpenModal(!openModal)} openModal={openModal}>

                <IoClose className='icone'/>

                <div className="more-info">
                    <h6>{infoModal.desc}</h6>
                    <p>{infoModal.txt}</p>
                </div>

            </S.MoreInfo>


        </S.Container>
    )
}
