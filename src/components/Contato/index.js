import React from 'react'
import * as s from './style'
import {Link} from "react-router-dom"

export const Contato = () => {
    return (
        <s.WrapBanner>
            <div class="parallax"></div>

            <div className="innertxt">

                <div className="container">
                    <h5>Nos envie uma mensagem falando sobre o seu projeto!</h5>
                    <Link to="/contato">
                        <button>Saiba mais</button>
                    </Link>
                </div>

            </div>
        </s.WrapBanner>

    )
}
