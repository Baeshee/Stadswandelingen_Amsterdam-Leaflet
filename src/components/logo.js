import React from 'react';
import AmsterdamLogo from '../img/amsterdam-logo-vector.svg'

import "../styles/css/logo.css"

export const Logo = () => {
    return(
        <section className="logo">
            <img className="logo__icon" src={AmsterdamLogo} alt="Amsterdam logo" />
            <h1 className="logo__title">Stadswandelingen Amsterdam</h1>
        </section>
    )
}