import React, { useEffect, useState } from 'react'
import * as S from "./styles.js"
import { Slider } from "../../components/Slider/index.js"
import {About} from "../../components/About"
import { Servicos } from '../../components/Servicos/index.js'

export const Home = () => {

    return (
        <S.Container>
            <Slider />
            <About/>
            <Servicos/>
        </S.Container>
    )
}
