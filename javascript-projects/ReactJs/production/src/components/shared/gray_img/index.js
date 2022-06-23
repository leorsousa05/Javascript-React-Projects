import React from "react";
import './style.css';

const GreyImage = (props) => {
    return(
        <img class="gray-img" src={props.img_url} alt="" />
    )
}

export default GreyImage;