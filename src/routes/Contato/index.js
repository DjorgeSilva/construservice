import React from 'react'
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as s from './style'

export const Contato = () => {
    return (
        <s.Container>

            <s.WrapBanner>
                <div class="parallax"></div>

                <div className="innertxt">

                    <div className="container">
                        <h5>Entre em contato <span>conosco</span></h5>
                    </div>

                </div>
            </s.WrapBanner>

            <s.Main className="container">
                <form>
                    <h1>Contato</h1>

                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" />

                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" />

                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" />

                    <label htmlFor="assunto-contato">Assunto</label>
                    <select name="assunto-contato" id="assunto-contato">
                        <option value="Dúvidas">Dúvidas</option>
                        <option value="Orçamento">Orçamento</option>
                        <option value="Parceria">Parceria</option>
                    </select>

                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea name="mensagem" id="" cols="30" rows="10"></textarea>

                </form>

                <Row className="row container">
                    <Col sm={12} md={6}>
                        <s.GridContato>
                            <i class="far fa-envelope"></i>
                            <h1>Departamento Comercial</h1>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=renata@construservice.com.br">renata@construservice.com.br</a>
                        </s.GridContato>
                    </Col>

                    <Col sm={12} md={6}>
                        <s.GridContato>
                            <i class="far fa-envelope"></i>
                            <h1>Departamento de Orçamentos</h1>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=flanelon18@email.com">renata@construservice.com.br</a>
                        </s.GridContato>
                    </Col>

                    <Col sm={12} md={6}>
                        <s.GridContato>
                            <i class="far fa-envelope"></i>
                            <h1>Departamento de Obras</h1>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=flanelon18@email.com">renata@construservice.com.br</a>
                        </s.GridContato>
                    </Col>

                    <Col sm={12} md={6}>
                        <s.GridContato>
                            <i class="fas fa-map-marker-alt"></i>
                            <h1>Endereço</h1>
                            <p>Travessa Teresina, 2404</p>
                            <p>Codó Novo, Codó</p>
                        </s.GridContato>
                    </Col>
                </Row>
            </s.Main>
        </s.Container>
    )
}
