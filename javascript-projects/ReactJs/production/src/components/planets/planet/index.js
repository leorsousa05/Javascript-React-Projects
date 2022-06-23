import React from "react";
import './style.css'
import GrayImg from '../../shared/gray_img'
import DescWLink from '../../shared/description/DescriptionWithLink'

const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescWLink text="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
            desc_url="https://pt.wikipedia.org/wiki/Mercúrio_(planeta)" />
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet