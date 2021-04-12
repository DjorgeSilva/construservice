import React from 'react'
import * as s from "./style"
import {Link} from 'react-router-dom'
import { Slider } from "./Slider/Index"


export const Portfolio = () => {

    const style = {
        textDecoration: "none"
    }

    return (
        <s.Container>
            <s.Wrapper className="container">
                <h1>Portfólio</h1>
                <p>Confira algumas das obras executadas pela <span>Constru Service</span></p>

                <Slider />

                <Link to="/portfolio" style={style}>
                    <button type="button">Saiba mais</button>
                </Link>

            </s.Wrapper>

            
        </s.Container>
    )
}
