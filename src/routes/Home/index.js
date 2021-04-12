import React, { useEffect, useState } from 'react'
import * as S from "./styles.js"
import { Slider } from "../../components/Slider/"
import {About} from "../../components/About"
import { Servicos } from '../../components/Servicos/'
import { Portfolio } from '../../components/Portfolio/'

export const Home = () => {

    return (
        <S.Container>
            <Slider />
            <About/>
            <Servicos/>
            <Portfolio/>
        </S.Container>
    )
}
