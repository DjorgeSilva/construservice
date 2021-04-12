import React from 'react'
import * as s from "./style"
import {Slider} from "./Slider/Index"


export const Portfolio = () => {
    return (
        <s.Container>
            <s.Wrapper className="container">
                <h1>Portfólio</h1>
            
            <Slider/>


            </s.Wrapper>
        </s.Container>
    )
}
