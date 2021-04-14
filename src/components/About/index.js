import React from 'react'
import AboutIMG from "../../assets/img/about-img.jpg"
import * as s from "./style.js"
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <>
            <s.Container className="container">
                <s.Txt>
                    <h1>Sobre a Construservice</h1>
                    <p>A Construservice presta serviços na área de construção civíl para incorporadoras e empresas. Contamos com profissionais especializados, que buscam constantemente o conhecimento, resultando em tecnologia e inovação para entregar obras diferenciadas, com o foco na qualidade, de acordo com o perfil de seus clientes.</p>
                    <Link to="/quem-somos">
                        <button>Saiba mais</button>
                    </Link>
                </s.Txt>

                <s.IMG>
                    <img src={AboutIMG} alt="imagens da contru service" />
                </s.IMG>
            </s.Container>
        </>
    )
}
