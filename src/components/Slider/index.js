import React from 'react'
import * as s from "./styles"
import { Carousel } from "react-bootstrap"
import slider1 from "../../assets/img/slider-1.jpeg"
import slider7 from "../../assets/img/adm1.jpg"
import slider2 from "../../assets/img/slider-2.jpeg"
import slider3 from "../../assets/img/slider-3.jpeg"
import slider4 from "../../assets/img/slider-4.jpg"
import slider5 from "../../assets/img/slider-5.jpg"
import slider6 from "../../assets/img/adm15.jpg"

export const Slider = () => {
    return (
        <s.Container>

            <Carousel className="slider">

            <Carousel.Item interval={1700} style={{ maxWidth: "100vw", maxHeight: "104vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Construservice - Construindo com Inovação</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1700} style={{ maxWidth: "100vw", maxHeight: "104vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider6}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Líder no segmento de Construção Civil</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1700} style={{ maxWidth: "100vw", maxHeight: "104vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider7}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Contamos com uma equipe qualificada</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1700} style={{ maxWidth: "100vw", maxHeight: "104vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider4}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Organização nas metodologias administrativas internas</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1700} style={{ maxWidth: "100vw", maxHeight: "104vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider5}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Colaboradores enpenhados a ressiginificar a forma de construir</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={1700} style={{ maxWidth: "100vw", maxHeight: "104vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Contamos com um vasto ambiente com aparelhos mordernos</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>




                <Carousel.Item interval={2000} style={{ maxWidth: "100vw", maxHeight: "104vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Nosso time de colaboradores é composto por especialistas.</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </s.Container>
    )
}
