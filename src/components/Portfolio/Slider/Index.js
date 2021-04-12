import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container } from "./SliderOwlElements.js"
import { DataTodos } from './Data'

const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        200: {
            items: 1,
        },
        500: {
            items: 1,
        },
        750: {
            items: 2,
        },
        997: {
            items: 3,
        },
        1200: {
            items: 4,
        }

    },
};

export const Slider = () => {

    return (
        <>
            <Container>
                    <OwlCarousel style={{ marginTop: "20px" }} className="owl-theme" loop {...options}>
                        {DataTodos.map((item) => {
                            return (

                                <div className="item">
                                    <div className="box-img">
                                        <img src={item.img} alt="obras feitas pela constru service" />
                                    </div>

                                    <div className="txt-box">
                                        <h6>{item.ref}</h6>
                                    </div>
                                </div>
                            )
                        })}
                    </OwlCarousel>
            </Container >

        </>

    )
}