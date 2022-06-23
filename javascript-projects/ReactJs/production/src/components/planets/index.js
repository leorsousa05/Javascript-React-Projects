import React, {Fragment} from "react";
import Planet from './planet/index'

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Planet
            name="Mercúrio"
            desc="Mercúrio é o menos e mais interno planeta do Sistema solar"
            img_url="http://www.ccvalg.pt/astronomia/sistema_solar/mercurio/mercurio_mariner_10.gif"
            />
        </Fragment>
    )
}

export default Planets;