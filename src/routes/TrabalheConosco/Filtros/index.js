import React from 'react'
import * as s from "./style"
import { Row, Col } from 'react-bootstrap'

export const Filtros = () => {
    return (
        <s.Container className="container">
            <Row className="row">
                <Col xs="12" md="4" className="coluna-filtros">
                    <select name="cars" id="cars">
                        <option value="volvo" disabled selected>Selecione uma cidade</option>
                        <option value="saab">Codó</option>
                        <option value="mercedes">Caxias</option>
                        <option value="audi">Teresina</option>
                        <option value="audi">Timon</option>
                        <option value="audi">Lima Campos</option>
                    </select>
                </Col>

                <Col xs="12" md="4" className="coluna-filtros">
                    <select name="cars" id="cars">
                        <option value="volvo" disabled selected>Selecione o nível da vaga</option>
                        <option value="saab">Aprendiz</option>
                        <option value="mercedes">Estagiário</option>
                        <option value="audi">Auxiliar</option>
                        <option value="audi">Assistente</option>
                        <option value="audi">Operacional</option>
                        <option value="audi">Análista</option>
                        <option value="audi">Especialista</option>
                        <option value="audi">Supervisor</option>
                        <option value="audi">Técnico</option>
                        <option value="audi">Gerente</option>
                        <option value="audi">Diretor</option>
                    </select>
                </Col>

                <Col xs="12" md="4" className="coluna-filtros">
                    <select name="cars" id="cars">
                        <option value="volvo" disabled selected>Selecione o tipo de contrato</option>
                        <option value="saab">CLT</option>
                        <option value="mercedes">Estagiário</option>
                        <option value="audi">PJ</option>
                        <option value="audi">Temporário</option>
                        <option value="audi">Período Determinado</option>
                    </select>
                </Col>

                <Col xs={12} className="coluna-filtros busca">
                    <input type="search" placeholder="Digite uma palavra chave" />
                    <button type="button">Buscar vagas</button>
                </Col>
            </Row>
        </s.Container>
    )
}
